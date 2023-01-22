require("dotenv").config();
const cors = require("cors");
const db = require("../db");
const morgan = require("morgan");


class workshopController {

    async createWorkshop(req) {
        const result = await db.query(
            "INSERT INTO workshop (workshop_name, workshop_description, workshop_date, workshop_time, workshop_duration, workshop_chapter, workshop_num_presentors, workshop_is_virtual) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);",
            [req.body.workshop_name, req.body.workshop_description, req.body.workshop_date, req.body.workshop_time, req.body.workshop_duration, req.body.workshop_chapter, req.body.workshop_num_presentors, req.body.workshop_is_virtual]
        );
        return result.rows[0];
    }

    async editWorkshop(req, workshop_id) {
        const result = await db.query(
            "UPDATE workshop SET workshop_name = $1, workshop_description = $2, workshop_date = $3, workshop_time = $4, workshop_duration = $5, workshop_chapter = $6, workshop_num_presentors = $7, workshop_is_virtual = $8 WHERE workshop_id = $9;",
            [req.body.workshop_name, req.body.workshop_description, req.body.workshop_date, req.body.workshop_time, req.body.workshop_duration, req.body.workshop_chapter, req.body.workshop_num_presentors, req.body.workshop_is_virtual, workshop_id]
        );
        return result.rows[0];
    }

    async assignUser(user, workshop) {
        try {
            await db.query(
                `INSERT INTO "workshop_assignments" ("user_id", "workshop_id", "has_accepted")  
                 VALUES ($1, $2, $3)`, [user.id, workshop.id, false]); // sends queries
            return true;
        } catch (error) {
            console.error(error.stack);
            return false;
        }
    }

}

module.exports = new workshopController();