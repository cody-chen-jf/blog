'use strict'

const fs = require('fs')
const utils = require('./utils')

const DIST_PATH = './dist/'

const ensureDir = () => {
  try {
    fs.accessSync(DIST_PATH, fs.F_OK)
  } catch (e) {
    fs.mkdirSync(DIST_PATH)
  }
}

ensureDir()

// write CNAME
fs.writeFileSync(DIST_PATH + 'CNAME', 'wxsm.space')
