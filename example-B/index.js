const System = require('systemic');
const positiveOperationsSubSystem = require('./subSystems/postiveOperations')
const negativeOperationsSubSystem = require('./subSystems/negativeOperations')

const createSystem = async () => {
    const positiveOperations = await positiveOperationsSubSystem.start();
    const negativeOperations = await negativeOperationsSubSystem.start();

    const calculatorSystem = new System({ name: 'calculatorSystem' })
        .add('positiveOperationsSubSystem', positiveOperations)
        .dependsOn()
        .add('negativeOperationsSubSystem', negativeOperations)
        .dependsOn();

    return calculatorSystem;
}


const useSystem = async () => {
    console.log('\n')

    const calculatorSystem = await createSystem();
    const calculator = await calculatorSystem.start()

    console.log('\n')
    console.log('\x1b[32m', 'SYSTEM:')
    console.log(JSON.stringify(calculator, null, 2));

    const a = 4;
    const b = 2;
    const addResult = calculator.positiveOperationsSubSystem.addOperation.execute(a, b);
    const multiplyResult = calculator.positiveOperationsSubSystem.multiplyOperation.execute(a, b);
    const subtractResult = calculator.negativeOperationsSubSystem.subtractOperation.execute(a, b);
    const divideResult = calculator.negativeOperationsSubSystem.divideOperation.execute(a, b);

    console.log('\n')
    console.log('\x1b[37m', `${a} + ${b} = ${addResult}`)
    console.log('\x1b[37m', `${a} * ${b} = ${multiplyResult}`)
    console.log('\x1b[37m', `${a} - ${b} = ${subtractResult}`)
    console.log('\x1b[37m', `${a} * ${b} = ${divideResult}`)

    await calculatorSystem.stop()
}

useSystem();