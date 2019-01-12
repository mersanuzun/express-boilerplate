if (process.env.NODE_ENV === 'prod') {
    module.exports = require('./prod');
} else {
    module.exports = require('./local');
}