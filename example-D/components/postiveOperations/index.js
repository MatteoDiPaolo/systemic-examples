const System = require('systemic');
const addComponent = require('./add')
const multiplyComponent = require('./multiply')

module.exports = new System({ name: 'postiveOperations' })
    .add('addOperation', addComponent())
    .dependsOn()
    .add('multiplyOperation', multiplyComponent())
    .dependsOn();