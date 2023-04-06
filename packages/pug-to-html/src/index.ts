#!/usr/bin/env node

'use strict'

import path from 'node:path'
import fs from 'node:fs'

import chalk from 'chalk'
import VueEngine from './engines/vue.engine'
import PugEngine from './engines/pug.engine'
import JadeEngine from './engines/jade.engine'

const args = process.argv
const fileName = args[args.length - 1]
const filePath = path.join(process.cwd(), fileName)
let engine

const _throwAndExit = (msg: string) => {
  console.log(chalk.red(msg))
  process.exit(1)
}

if (!fs.existsSync(filePath)) _throwAndExit(`${fileName} was not found`)

if (filePath.includes('.vue')) engine = VueEngine(filePath)
else if (filePath.includes('.pug')) engine = PugEngine(filePath)
else if (filePath.includes('.jade')) engine = JadeEngine(filePath)

else _throwAndExit(`${fileName} was not found`)

if (engine) {
  if (engine?.name === 'vue' && 'hasSupportedVueTemplate' in engine && !engine?.hasSupportedVueTemplate())
    _throwAndExit(`${fileName} does not have a pug template`)

  const compiledResult = engine?.convertTemplate()
  console.log(chalk.green(compiledResult))

  engine.saveToFile(compiledResult)
}

process.exit(0)
