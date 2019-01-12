const {
    status
} = require('../utils/request');

module.exports = {
    home: (req, res, next) => {
        setTimeout(() => {
            res.status(status.OK)
            .send({
                message: 'App is running...'
            });
        }, 5000);
    }
}