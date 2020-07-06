module.exports = () => {
    const start = async (dependencies) => {
        console.log('\x1b[35m', `- starting component config with dependencies: ${JSON.stringify(dependencies, null, 2)}`);

        return {
            logger: {
                level: 'warn'
            },
            mongo: {
                primary: {
                    url: 'mongo://primary'
                },
                secondary: {
                    url: 'mongo://secondary'
                }
            }
        };
    };

    return { start };
};