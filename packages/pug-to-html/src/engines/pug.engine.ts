
import fs from 'node:fs'
import pug from 'pug'
import plugin from '../plugin'

export default function (filePath: string) {
  const contents = fs.readFileSync(filePath, 'utf-8')

  return {
    name: 'pug',

    convertTemplate() {
      console.log(filePath, contents)
      return pug.render(contents, {
        doctype: 'html',
        pretty: true,
        plugins: [plugin],
      })
    },

    saveToFile(html: string) {
      fs.writeFileSync(filePath.replace('.pug', '.html'), html)
    },
  }
}
