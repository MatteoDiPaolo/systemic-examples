module.exports = () => {
    const start = async (dependencies) => {
        console.log('\x1b[35m', `- starting component logger with dependencies: ${JSON.stringify(dependencies, null, 2)}`);

        return console
    };

    return { start };
};