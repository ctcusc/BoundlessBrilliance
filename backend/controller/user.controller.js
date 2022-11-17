const taskService  = require('../repository/user.repository');

class UserController {

    async createUser(user) {
        return await taskService.createUser(user);
    }

    async validateUser(user) {
        return await taskService.validateUser(user);
    }

    async approveUser(user) {
        return await taskService.approveUser(user);
    }

}
module.exports = new UserController();