const {
    status
} = require('../utils/request');
const logger = require('../lib/logger');

module.exports = {
    sayHello: (req, res, next) => {
        setTimeout(() => {
            
            const stopTimer = req.ctx.startTimer('test');

            setTimeout(() => {
                req.ctx.addData('name', 'ersan')
                stopTimer();
                res.status(status.OK)
                .send({
                    message: 'Hello world'
                });
                console.log('hi');
            }, 200);

        }, 1000);
    }
}