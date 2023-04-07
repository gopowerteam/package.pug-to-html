import walk from 'pug-walk'

const bindAttrRE = /^v-bind:|^:/
const eventAttrRE = /^v-on:|^@/
const slotAttrRE = /^v-slot:|^#/
const dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/

export default {
  postLoad: (ast: any) => {
    return walk(ast, (node: any, replace: any) => {
      if (node.type === 'Tag' && node.attrs && node.attrs.length > 0) {
        node.attrs = node.attrs.map((attr: any) => {
          const name = attr.name

          if (name.startsWith(':') && attr.val.startsWith('\'{') && attr.val.endsWith('}\''))
            attr.val = attr.val.replace(/"([^"]*)"/g, '\'$1\'').replace(/^'/, '"').replace(/'$/, '"')

          if (name.match(bindAttrRE) || name.match(eventAttrRE) || name.match(slotAttrRE) || name.match(dirAttrRE))
            attr.mustEscape = false

          return attr
        })
      }
    })
  },
}
