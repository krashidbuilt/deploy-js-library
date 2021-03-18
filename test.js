require('dotenv').config();

const { APP_TYPE = 'up', APP_NAME, NODE_ENV } = process.env;

const Logger = require('@KrashidBuilt/common/utils/logger');

const SSM = require('./src/utils/AWS/SSM');
const logger = new Logger(__filename);

const main = async () => {
    logger.info();

    await SSM.createParameters(APP_TYPE, APP_NAME, NODE_ENV, {
        PORT: 5000,
        SUPER_SECRET_THING: new Date().getTime(),
        EXAMPLE_OBJECT: {
            test: 'something'
        }
    });

};

main();