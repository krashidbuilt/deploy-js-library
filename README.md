# KrashidBuilt Deploy JS Library

## How to add this to your project?
```
$ yarn add @KrashidBuilt/deploy@github:https://github.com/krashidbuilt/deploy-js-library.git

```

## How to update your version of this library?
```
$ yarn upgrade @KrashidBuilt/deploy
```

## How to use the environment builder?
Sample ./.env file:
```
NODE_ENV=staging
AWS_DEFAULT_REGION=us-east-1
AWS_PROFILE=krashidbuilt-staging
APP_NAME=some-up-api
```
Sample ./assign.env.js file:
```
require('dotenv').config();

const SSM = require('@KrashidBuilt/deploy/utils/AWS/SSM');

const { APP_TYPE = 'up', APP_NAME, NODE_ENV } = process.env;

// example for apex up environment variables
const main = async () => {
    await SSM.createParameters(APP_TYPE, APP_NAME, NODE_ENV, {
        PORT: 5000,
        SUPER_SECRET_THING: new Date().getTime(),
        EXAMPLE_OBJECT: {
            test: 'something'
        }
    });

};

main();
```
Sample ./constants.js file:
```
const {
    PORT,
    SUPER_SECRET_THING,
    EXAMPLE_OBJECT
} = process.env;

module.exports = {
    PORT,
    SUPER_SECRET_THING,
    EXAMPLE_OBJECT: JSON.parse(EXAMPLE_OBJECT),
};
```