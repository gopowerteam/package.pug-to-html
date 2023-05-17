#!/usr/bin/env node

'use strict'

import path from 'node:path'
import fs from 'node:fs'
import chalk from 'chalk'
import VueEngine from './engines/vue.engine'
import PugEngine from './engines/pug.engine'
import JadeEngine from './engines/jade.engine'

const args = process.argv
const targetPath = path.join(process.cwd(), args[args.length - 1])

const showError = (msg: string) => {
  console.log(chalk.red(msg))
}

/**
 * 创建引擎
 * @param filePath
 * @returns
 */
function createEngine(filePath: string) {
  switch (true) {
    case filePath.endsWith('.vue'):
      return VueEngine(filePath)
    case filePath.endsWith('.pug'):
      return PugEngine(filePath)
    case filePath.endsWith('.jade'):
      return JadeEngine(filePath)
  }
}

/**
 * 格式化文件
 * @param filePath
 * @returns
 */
function formatFile(filePath: string) {
  const engine = createEngine(filePath)

  if (!engine) return

  // 排出非pug模板
  if (engine?.name === 'vue' && 'hasSupportedVueTemplate' in engine && !engine?.hasSupportedVueTemplate())
    return

  const compiledResult = engine?.convertTemplate()
  console.log(chalk.green.bold('格式化完成: '), chalk.green(filePath))

  engine.saveToFile(compiledResult)
}

function format(targetPath: string) {
  if (!fs.existsSync(targetPath))
    return showError(`${targetPath} was not found`)

  const stat = fs.statSync(targetPath)
  switch (true) {
    // 处理目录
    case stat.isDirectory() && !['node_modules'].includes(path.basename(targetPath)):
      fs.readdirSync(targetPath)
        .forEach(x => format(path.join(targetPath, x)))
      break
    // 处理文件
    case stat.isFile() && ['.vue', '.jade', '.pug'].includes(path.extname(targetPath)):
      formatFile(targetPath)
      break
  }
}

format(targetPath)
