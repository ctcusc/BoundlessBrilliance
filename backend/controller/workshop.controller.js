const taskService  = require('../repository/workshop.repository');

class WorkshopController {

    async createWorkshop(workshop) {
        return await taskService.createWorkshop(workshop);
    }

    async editWorkshop(workshop) {
        return await taskService.editWorkshop(workshop);
    }

    async assignUser(user, workship) {
        return await taskService.assignUser(user, workshop);
    }

}
module.exports = new WorkshopController();