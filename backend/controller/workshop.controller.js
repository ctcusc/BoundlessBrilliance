require("dotenv").config();
const cors = require("cors");
const db = require("../db");
const morgan = require("morgan");


class workshopController {

    async createWorkshop(workshop) {
        // Sprint 0: Olivia

    }

    async editWorkshop(workshop) {
        // Sprint 0: Olivia
    }

    async assignUser(user, workshop) {
        // Sprint 0: Natalie
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