const uuidv1 = require('uuid/v1');

module.exports = (logger) => {
    const ctx = {
        id: uuidv1(),
        timers: {},
        data: {},
        requestTime: 0,
    };

    const stopRequestTime = (() => {
        const startTime = Date.now();

        return () => {
            const duration = Date.now() - startTime;

            ctx.requestTime = duration;
        }
    })();

    return {
        startTimerForSync: (key, action) => {
            const startTime = Date.now();

            action();

            const duration = Date.now() - startTime;

            ctx.timers[key] = duration;
        },

        startTimer: (key, action) => {
            const startTime = Date.now();

            return () => {
                const duration = Date.now() - startTime;

                ctx.timers[key] = duration;
            }
        },

        addData: (key, data) => {
            ctx.data[key] = data;
        },

        finishRequest: () => {
            stopRequestTime();

            logger.info(JSON.stringify(ctx));
        }
    };
}