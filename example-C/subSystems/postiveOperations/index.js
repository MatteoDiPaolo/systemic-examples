const System = require('systemic');
const addComponent = require('./components/add')
const multiplyComponent = require('./components/multiply')

module.exports = new System({ name: 'postiveOperations' })
    .add('addOperation', addComponent())
    .dependsOn()
    .add('multiplyOperation', multiplyComponent())
    .dependsOn();