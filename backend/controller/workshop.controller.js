require("dotenv").config();
const cors = require("cors");
const db = require("../db");
const morgan = require("morgan");


class workshopController {

    async createWorkshop(req) {
        const result = await db.query(
            "INSERT INTO workshop (workshop_name, workshop_description, workshop_location, workshop_date, workshop_time, workshop_duration, workshop_chapter, workshop_is_virtual) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);",
            [req.body.workshop_name, req.body.workshop_description, req.body.workshop_location, req.body.workshop_date, req.body.workshop_time, req.body.workshop_duration, req.body.workshop_chapter, req.body.workshop_is_virtual]
        );
        return result.rows[0];
    }

    async editWorkshop(req, workshop_id) {
        const result = await db.query(
            "UPDATE workshop SET workshop_name = $1, workshop_description = $2, workshop_date = $3, workshop_time = $4, workshop_duration = $5, workshop_chapter = $6, workshop_is_virtual = $7, workshop_location = $8 WHERE workshop_id = $9;",
            [req.body.workshop_name, req.body.workshop_description, req.body.workshop_date, req.body.workshop_time, req.body.workshop_duration, req.body.workshop_chapter, req.body.workshop_is_virtual, req.body.workshop_location, workshop_id]
        );
        return result.rows[0];
    }

    async acceptWorkshop(user_id, workshop_id) {
        
        try{
        const result = await db.query(
            "UPDATE workshop_assignments SET has_accepted=1 WHERE user_id=$1 AND workshop_id=$2;",
            [user_id, workshop_id]
        );
        } catch(error){
            return error;
        }
    }

    async declineWorkshop(user_id, workshop_id) {
        try{
            const result = await db.query(
                "UPDATE workshop_assignments SET has_accepted=-1 WHERE user_id=$1 AND workshop_id=$2;",
                [user_id, workshop_id]
            );
            } catch(error){
                return error;
            }
    }


    async assignUser(user_id, workshop_id) {
        const result = await db.query(
            `INSERT INTO "workshop_assignments" ("user_id", "workshop_id", "has_accepted")  
                VALUES ($1, $2, $3)`, [user_id, workshop_id, 0]); // sends queries
        return result.rows[0];
    }

    async undecidedWorkshops(user_id) {
        const result = await db.query(
            "SELECT * from workshop JOIN workshop_assignments on workshop.workshop_id = workshop_assignments.workshop_id WHERE user_id = $1 and has_accepted = 0", [user_id]
        );
        var workshop_ids = [];
        for (let i = 0;i < result.rows.length;i ++) {
            workshop_ids.push(result.rows[i]);
        }

        return workshop_ids;
    }

    async upcomingWorkshop(user_id) {
        const result = await db.query(
            "select * from workshop JOIN workshop_assignments on workshop.workshop_id = workshop_assignments.workshop_id WHERE user_id = $1 and has_accepted = 1 and TO_TIMESTAMP(workshop_date, 'Month DD YYYY') > CURRENT_DATE", [user_id]
        );
        var workshop_ids = [];
        for (let i = 0;i < result.rows.length;i ++) {
            workshop_ids.push(result.rows[i]);
        }

        return workshop_ids;
    }


}

module.exports = new workshopController();