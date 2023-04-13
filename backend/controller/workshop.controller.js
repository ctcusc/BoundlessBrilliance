require("dotenv").config();
const cors = require("cors");
const db = require("../db");
const morgan = require("morgan");


class workshopController {

    async getWorkshop(workshop_id) {
        try{
            const result = await db.query(
                "SELECT * FROM  workshop WHERE workshop_id = $1;",
                [workshop_id]
            );
            return result.rows;
        } catch(error){
            return error;
         }
    }

    async createWorkshop(req) {
        try{
            const result = await db.query(
                "INSERT INTO workshop (workshop_name, workshop_description, workshop_location, workshop_date, workshop_start_time, workshop_end_time, workshop_chapter, workshop_is_virtual) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);",
                [req.body.workshop_name, req.body.workshop_description, req.body.workshop_location, req.body.workshop_date, req.body.workshop_start_time, req.body.workshop_end_time, req.body.workshop_chapter, req.body.workshop_is_virtual]
            );
            return result.rows[0];
        } catch(error){
            return error;
        }
    }

    async editWorkshop(req, workshop_id) {
        try {
            const result = await db.query(
                "UPDATE workshop SET workshop_name = $1, workshop_description = $2, workshop_date = $3, workshop_start_time = $4, workshop_end_time = $5, workshop_chapter = $6, workshop_is_virtual = $7, workshop_location = $8 WHERE workshop_id = $9;",
                [req.body.workshop_name, req.body.workshop_description, req.body.workshop_date, req.body.workshop_start_time, req.body.workshop_end_time, req.body.workshop_chapter, req.body.workshop_is_virtual, req.body.workshop_location, workshop_id]
            );
            return result.rows[0];
        } catch (error){
            return error;
        } 
    }

    async acceptWorkshop(user_id, workshop_id) {
        try{
        const result = await db.query(
            "UPDATE workshop_assignments SET has_accepted=1 WHERE user_id=$1 AND workshop_id=$2;",
            [user_id, workshop_id]
        );
        return result.rows[0];
        } catch(error){
            return error;
        }
    }

    async deleteWorkshop(workshop_id) {
        try{
        await db.query(
            "DELETE FROM workshop_assignments WHERE workshop_id=$1;",
            [workshop_id]
        )
        await db.query(
            "DELETE FROM workshop WHERE workshop_id=$1;",
            [workshop_id]
        );
        return result.rows[0];
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
        try {
            const result = await db.query(
                `INSERT INTO "workshop_assignments" ("user_id", "workshop_id", "has_accepted")  
                    VALUES ($1, $2, $3)`, [user_id, workshop_id, 0]); // sends queries
            return result.rows[0];
        } catch (error){
            return error;
        }
    }

    async removeAssignment(user_id, workshop_id) {
        try {
            const result = await db.query(
                `DELETE FROM workshop_assignments 
                WHERE user_id = $1 AND workshop_id = $2;`, [user_id, workshop_id]); // sends queries
            return result.rows[0];
        } catch (error){
            return error;
        }
    }

    async undecidedWorkshops(user_id) {
        try {
            const result = await db.query(
                "SELECT * from workshop JOIN workshop_assignments on workshop.workshop_id = workshop_assignments.workshop_id WHERE user_id = $1 and has_accepted = 0", [user_id]
            );
            var workshop_ids = [];
            for (let i = 0;i < result.rows.length;i ++) {
                workshop_ids.push(result.rows[i]);
            }

            return workshop_ids;
        } catch(error){
            return error;
        }
    }

    async upcomingWorkshop(user_id) {
        try {
            const result = await db.query(
                "select * from workshop JOIN workshop_assignments on workshop.workshop_id = workshop_assignments.workshop_id WHERE user_id = $1 and has_accepted = 1 and TO_TIMESTAMP(workshop_date, 'Month DD YYYY') > CURRENT_DATE", [user_id]
            );
            var workshop_ids = [];
            for (let i = 0;i < result.rows.length;i ++) {
                workshop_ids.push(result.rows[i]);
            }

            return workshop_ids;
        } catch(error){
            return error;
        }
    }

    async adminWorkshops() {
        try {
            const result = await db.query(`
                SELECT 
                w.workshop_id as id,
                w.workshop_name as name, 
                w.workshop_date as date,
                w.workshop_start_time as start_time,
                w.workshop_end_time as end_time,
                w.workshop_location as location,
                w.workshop_description as description,
                COALESCE(count(wa.user_id), 0) AS assigned,
                COALESCE(count(CASE WHEN wa.has_accepted = 1 THEN 1 END), 0) AS accepted,
                COALESCE(count(CASE WHEN wa.has_accepted = -1 THEN 1 END), 0) AS declined 
            FROM 
                workshop w 
            LEFT JOIN 
                workshop_assignments wa ON w.workshop_id = wa.workshop_id 
            GROUP BY 
                w.workshop_id
            ORDER BY 
            w.workshop_name DESC;`)
            var workshop_details = [];
            for (let i = 0;i < result.rows.length;i ++) {
                workshop_details.push(result.rows[i]);
            }
            return workshop_details;
            // return workshop_ids;
        } catch(error){
            return error;
        }
    }

    async adminSignups() {
        try {
            const result = await db.query(
                "select * from master_users join user_status on master_users.user_id = user_status.user_id where user_status = 0"
            );
            var user_detail = [];
            for (let i = 0;i < result.rows.length;i ++) {
                user_detail.push(result.rows[i]);
            }

            return user_detail;

            // return workshop_ids;
        } catch(error){
            return error;
        }
    }

    async generateWorkshopMetrics() {
        try{
          const completed_workshop = await db.query(
            "SELECT COUNT(*) as workshop FROM workshop WHERE TO_TIMESTAMP(workshop_date, 'Month DD YYYY') < CURRENT_DATE;",
          );
          var completed = completed_workshop.rows[0];
          const upcoming_workshop = await db.query(
            "SELECT COUNT(*) as workshop FROM workshop WHERE TO_TIMESTAMP(workshop_date, 'Month DD YYYY') >= CURRENT_DATE;",
          );
          var upcoming = upcoming_workshop.rows[0];
          const res = { 
              completed,
              upcoming
          };
          return res;
          } catch(error){
            return error;
          }
    }


}

module.exports = new workshopController();