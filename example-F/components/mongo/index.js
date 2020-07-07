const System = require('systemic')
const mongo = require('./mongo')

module.exports = new System({ name: 'mongo' })
    .add('mongo.primary', mongo())
    .dependsOn('config', 'logger')
    .add('mongo.secondary', mongo())
    .dependsOn('config', 'logger')