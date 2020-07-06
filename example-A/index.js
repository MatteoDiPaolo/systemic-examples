const System = require('systemic');
const addComponent = require('./components/add')
const multiplyComponent = require('./components/multiply')

const createSystem = () => {
    const calculatorSystem = new System({ name: 'calculatorSystem' })
        .add('addOperation', addComponent())
        .dependsOn()
        .add('multiplyOperation', multiplyComponent())
        .dependsOn();

    return calculatorSystem;
}


const useSystem = async () => {
    console.log('\n')
    
    const calculatorSystem = createSystem();
    const calculator = await calculatorSystem.start();

    console.log('\n')
    console.log('\x1b[32m', 'SYSTEM:')
    console.log(JSON.stringify(calculator, null, 2));

    const a = 4;
    const b = 2;
    const addResult = calculator.addOperation.execute(a, b);
    const multiplyResult = calculator.multiplyOperation.execute(a, b);

    console.log('\n')
    console.log('\x1b[37m', `${a} + ${b} = ${addResult}`)
    console.log('\x1b[37m', `${a} * ${b} = ${multiplyResult}`)

    await calculatorSystem.stop()
}

useSystem();