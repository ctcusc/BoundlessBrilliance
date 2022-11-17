const { connect } = require('../db/db.config');


class workshopController {

    db = {};

    constructor() {
        this.db = connect();
    }

    async createWorkshop(workshop) {
        // Sprint 0: Olivia
    
    }

    async editWorkshop(workshop) {
        // Sprint 0: Olivia
    }

    async assignUser(user, workshop) {
        // Sprint 0: Natalie
    }


}

module.exports = new workshopController();