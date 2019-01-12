const reqCtx = require('../lib/reqContext');

module.exports = (logger) => {
    logger = logger ? logger : {
        log: (message) => console.log(message),
        error: (message) => console.error(message),
        warn: (message) => console.warn(message),
        info: (message) => console.info(message),
    }

    return (request, response, next) => {
        request.ctx = reqCtx(logger);

        response.on('finish', () => {
            request.ctx.finishRequest();
        });

        next();
    }
}