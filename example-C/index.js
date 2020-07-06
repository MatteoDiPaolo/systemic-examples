const System = require('systemic');
const path = require('path')


const createSystem = () => {
    const subSystems = path.join(__dirname, 'subSystems')
    const calculatorSystem = new System({ name: 'calculatorSystem' }).bootstrap(subSystems);

    return calculatorSystem;
}


const useSystem = async () => {
    console.log('\n')

    const calculatorSystem = createSystem();
    const calculator = await calculatorSystem.start()

    console.log('\n')
    console.log('\x1b[32m', 'SYSTEM:')
    console.log(JSON.stringify(calculator, null, 2));

    const a = 4;
    const b = 2;
    const addResult = calculator.addOperation.execute(a, b);
    const multiplyResult = calculator.multiplyOperation.execute(a, b);
    const subtractResult = calculator.subtractOperation.execute(a, b);
    const divideResult = calculator.divideOperation.execute(a, b);

    console.log('\n')
    console.log('\x1b[37m', `${a} + ${b} = ${addResult}`)
    console.log('\x1b[37m', `${a} * ${b} = ${multiplyResult}`)
    console.log('\x1b[37m', `${a} - ${b} = ${subtractResult}`)
    console.log('\x1b[37m', `${a} * ${b} = ${divideResult}`)

    await calculatorSystem.stop()
}

useSystem();