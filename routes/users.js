const controller = require('../controllers/users');

module.exports = {
    add: (req, res) => {
        return;
    }
}

module.exports = (router) => {
    router.route('/users')
        .post(controller.add);

    router.route('/login')
        .post(controller.login)
}

