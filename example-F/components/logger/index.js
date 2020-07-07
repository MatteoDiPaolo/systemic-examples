const System = require('systemic')
const logger = require('./logger')

module.exports = new System({ name: 'logger' })
    .add('logger', logger())
    .dependsOn('config')