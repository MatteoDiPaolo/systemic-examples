module.exports = () => {
    const start = async () => {
        console.log('\x1b[35m', '- starting component multiply');

        const execute = (a, b) => a * b;

        return {
            execute,
        };
    };

    return { start };
};
