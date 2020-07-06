const System = require('systemic');
const subtractComponent = require('./subtract')
const divideComponent = require('./divide')

module.exports = new System({ name: 'negativeOperations' })
    .add('subtractOperation', subtractComponent())
    .dependsOn()
    .add('divideOperation', divideComponent())
    .dependsOn();