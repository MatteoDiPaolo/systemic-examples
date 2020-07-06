const System = require('systemic');
const path = require('path')

const createSystem = () => {
    const components = path.join(__dirname, 'components')
    const exampleSystem = new System({ name: 'exampleSystem' }).bootstrap(components);

    return exampleSystem;
}


const useSystem = async () => {
    console.log('\n')

    const exampleSystem = createSystem();
    const example = await exampleSystem.start()

    console.log('\n')
    console.log('\x1b[32m', 'SYSTEM:')
    console.log(JSON.stringify(example, null, 2));
    
    console.log('\x1b[37m')
    example.mongo.primary.getDataById();
    example.mongo.secondary.getDataById();
    console.log('\x1b[31m')

    process.on('SIGINT', async () => {
        await exampleSystem.stop()
        console.log('System has stopped')
        process.exit(0)
    });

    setInterval(() => Number.MAX_INT_VALUE)
}

useSystem();
