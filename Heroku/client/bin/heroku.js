#!/usr/bin/env node
const {run} = require('@cli-engine/engine')
const config = {
  channel: 'stable',
  version: '6.15.22-3f1c4bd'
}
run(process.argv, config)
