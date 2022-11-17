const { connect } = require('../config/db.config');


class WorkshopRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
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

module.exports = new WorkshopRepository();