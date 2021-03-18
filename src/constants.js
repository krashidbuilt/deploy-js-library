const {
    NODE_ENV = 'develop',
    AWS_DEFAULT_REGION = 'us-east-1',
    AWS_PROFILE
} = process.env;

module.exports = {
    NODE_ENV,
    AWS_DEFAULT_REGION,
    AWS_PROFILE,
};