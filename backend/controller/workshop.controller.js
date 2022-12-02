require("dotenv").config();
const cors = require("cors");
const db = require("../db");
const morgan = require("morgan");


class workshopController {

    async createWorkshop(req) {
        // Sprint 0: Olivia
        console.log(req.body.workshop_description);
        const result = await db.query(
            "INSERT INTO workshop (workshop_name, workshop_description, workshop_date, workshop_time, workshop_duration, workshop_chapter, workshop_num_presentors, workshop_is_virtual) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);",
            [req.body.workshop_name, req.body.workshop_description, req.body.workshop_date, req.body.workshop_time, req.body.workshop_duration, req.body.workshop_chapter, req.body.workshop_num_presentors, req.body.workshop_is_virtual]
            );
        return result.rows[0];
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