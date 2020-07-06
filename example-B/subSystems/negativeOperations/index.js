const System = require('systemic');
const subtractComponent = require('./components/subtract')
const divideComponent = require('./components/divide')

module.exports = new System({ name: 'negativeOperations' })
    .add('subtractOperation', subtractComponent())
    .dependsOn()
    .add('divideOperation', divideComponent())
    .dependsOn();