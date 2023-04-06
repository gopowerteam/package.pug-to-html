import fs from 'node:fs'
import jade from 'jade'
// monkey patch for jade
import Attrs from 'jade/lib/nodes/attrs'
import pug from 'pug'

import pugPlugin from '../plugin'

Attrs.prototype.setAttribute = function (name: string, val: any, escaped: boolean) {
  if (name !== 'class' && this.attributeNames.includes(name))
    throw new Error(`Duplicate attribute "${name}" is not allowed.`)

  this.attributeNames.push(name)
  const bindAttrRE = /^v-bind:|^:/
  const eventAttrRE = /^v-on:|^@/
  const slotAttrRE = /^v-slot:|^#/
  const dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/
  if (name.match(bindAttrRE) || name.match(eventAttrRE) || name.match(slotAttrRE) || name.match(dirAttrRE))
    escaped = false

  this.attrs.push({ name, val, escaped })
  return this
}

enum TEMPLATE_LANG {
  PUG = 'PUG',
  JADE = 'JADE',
}

const TEMPLATE_PREFIX = {
  PUG: '<template lang="pug">',
  JADE: '<template lang="jade">',
}

export default function (filePath: string) {
  const contents = fs.readFileSync(filePath, 'utf-8')

  function getVueTemplateLang() {
    if (contents.includes(TEMPLATE_PREFIX.PUG)) return TEMPLATE_LANG.PUG
    else if (contents.includes(TEMPLATE_PREFIX.JADE)) return TEMPLATE_LANG.JADE
  }

  function findTemplateRaw(templateLang: 'PUG' | 'JADE') {
    return contents.split(TEMPLATE_PREFIX[templateLang])[1].split('</template>')[0]
  }

  function findTemplate() {
    const templateLang = getVueTemplateLang()
    if (!templateLang) throw new Error('Not found supported template lang')

    let lines = findTemplateRaw(templateLang)
      .split('\n')
      .filter(row => row !== '')

    if (lines[0].startsWith('  ')) lines = lines.map(line => line.replace('  ', ''))

    return lines.join('\n')
  }

  return {
    name: 'vue',

    hasSupportedVueTemplate() {
      return getVueTemplateLang() !== undefined
    },

    convertTemplate(_force?: boolean) {
      const templateLang = getVueTemplateLang()
      if (templateLang === TEMPLATE_LANG.PUG) {
        return pug.render(findTemplate(), {
          doctype: 'html',
          pretty: true,
          plugins: [pugPlugin],
        })
      }
      else if (templateLang === TEMPLATE_LANG.JADE) {
        return jade.render(findTemplate(), {
          doctype: 'html',
          pretty: true,
        })
      }
      return findTemplate()
    },

    saveToFile(html: string) {
      const formatted = html
        .split('\n')
        .map(line => `  ${line}`)
        .join('\n')

      const templateLang = getVueTemplateLang()

      if (templateLang) {
        const data = contents
          .replace(findTemplateRaw(templateLang), `${formatted}\n`)
          .replace(TEMPLATE_PREFIX[templateLang], '<template>')
        fs.writeFileSync(filePath, data)
      }
    },
  }
}
