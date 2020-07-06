const System = require('systemic');
const runner = require('systemic-domain-runner');
const path = require('path')

const createSystem = () => {
    const components = path.join(__dirname, 'components')
    const exampleSystem = new System({ name: 'exampleSystem' }).bootstrap(components);

    return exampleSystem;
}



const useSystem = async () => {
    console.log('\n')

    const emergencyLogger = console;
    runner(createSystem(), { logger: emergencyLogger }).start((err, components) => {
        if (err) die('Error starting system', err);
        console.log('\n')
        console.log('\x1b[32m', 'SYSTEM:')
        console.log(JSON.stringify(components, null, 2));

        console.log('\x1b[37m')
        components.mongo.primary.getDataById();
        components.mongo.secondary.getDataById();
        console.log('\x1b[31m')

        setInterval(() => Number.MAX_INT_VALUE)
    });
}

useSystem();
