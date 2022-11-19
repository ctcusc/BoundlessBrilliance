require("dotenv").config();
const cors = require("cors");
const db = require("../db");
const morgan = require("morgan");


class userController {

    async example(req){
        // Example of query
        console.log(req.body.id);
        const reviews = await db.query(
            "select assignee from tasks where tasks.id = $1",
            [req.body.id]
            );

        console.log(reviews.rows);
        return reviews.rows
    }

    async createUser(user) {
        // Sprint 0: Wonjun
    
    }

    async validateUser(user) {
        // Sprint 0: Evans
    }

    async approveUser(user) {
        // Sprint 0: Fred
    }


}

module.exports = new userController();