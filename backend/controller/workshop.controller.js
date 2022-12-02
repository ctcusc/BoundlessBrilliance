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
            console.log(data);
        } catch(err) {
            console.log('Error::' + workshop.firstname);
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
            console.log('Error::' + err);
        }
        return data;
    }

    async assignUser(user, workshop) {
        // Sprint 0: Natalie
    }


}

module.exports = new workshopController();