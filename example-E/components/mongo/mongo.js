module.exports = () => {
    let db;

    const start = async (dependencies) => {
        console.log('\x1b[35m', `- starting component mongo with dependencies: ${JSON.stringify(dependencies, null, 2)}`);
        db = dependencies.config.url;

        const getDataById = () => dependencies.logger.info(`Getting data by id from ${db}`)

        return {
            getDataById
        }
    };

    const stop = async () => {
        return console.log(`Closing connection with ${db}`)
    };

    return { start, stop };
};