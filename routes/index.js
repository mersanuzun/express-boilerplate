const homeController = require('../controllers/homeContoller');
const apiController = require('../controllers/apiController');

module.exports = (app) => {
    app.get('/', homeController.home);
    app.get('/api/sayHello', apiController.sayHello);
}