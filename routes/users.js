const controller = require('../controllers/users');
const validateToken = require('../utils').validateToken;

module.exports = {
    add: (req, res) => {
        return;
    }
}

module.exports = (router) => {
    router.route('/users')
        .post(controller.add)
        .get(validateToken, controller.getAll);

    router.route('/login')
        .post(controller.login)
        
}

