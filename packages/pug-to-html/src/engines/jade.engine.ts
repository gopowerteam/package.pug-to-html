import fs from 'node:fs'
import jade from 'jade'

export default function (filePath: string) {
  const contents = fs.readFileSync(filePath, 'utf-8')

  return {
    name: 'jade',

    convertTemplate() {
      console.log(filePath, contents)
      return jade.render(contents, {
        doctype: 'html',
        pretty: true,
      })
    },

    saveToFile(html: string) {
      fs.writeFileSync(filePath.replace('.jade', '.html'), html)
    },
  }
}
