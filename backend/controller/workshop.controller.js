require("dotenv").config();
const cors = require("cors");
const db = require("../db");
const morgan = require("morgan");


class workshopController {

    async createWorkshop(workshop) {
        // Sprint 0: Olivia
        let data = {};
        try {
            data = await this.db.workshop.create(workshop);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    
    }

    async editWorkshop(workshop) {
        // Sprint 0: Olivia
        let data = {};
        try {
            data = await this.db.workshop.update({...workshop}, {
                where: {
                    workshop_id: workshop.workshop_id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async assignUser(user, workshop) {
        // Sprint 0: Natalie
    }


}

module.exports = new workshopController();