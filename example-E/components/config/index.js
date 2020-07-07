const System = require('systemic')
const config = require('./config')

module.exports = new System({ name: 'config' })
    .add('config', config(), { scoped: true })