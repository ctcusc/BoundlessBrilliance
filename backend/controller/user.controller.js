require("dotenv").config();
const cors = require("cors");
const db = require("../db");
const morgan = require("morgan");

class userController {

  async example(req) {
    // Example of query
    console.log(req.body.id);
    const reviews = await db.query(
      "select assignee from tasks where tasks.id = $1",
      [req.body.id]
    );

    console.log(reviews.rows);
    return reviews.rows;
  }

  async createUser(user) {
    // Sprint 0: Wonjun
  }

  async validateUser(user) {
     // Sprint 0: Evans
     console.log(req.body.user_password);
     try{
         const result = await db.query(
             "select user_id from master_users WHERE user_email = $1 and user_password = $2",
             [req.body.user_email, req.body.user_password]
         );
         console.log(result.rows);
         if (result.rows.length == 0) {
             return false;
         }
         else {
             console.log(result.rows[0].user_id);
 
             const result2 = await db.query(
                 "select user_status from user_status WHERE user_id = $1",
                 [result.rows[0].user_id]
             );
 
             const checkStatus = result2.rows[0].user_status;
 
             if (checkStatus == 0){
                 console.log("waiting approval");
                 return false;
             }
             else{
                 console.log("success");
                 return true;
             }
         
         } 
         }catch (error){
             return false;
         }
  }

  async approveUser(user_id) {
    // Sprint 0: Fred
    console.log(user_id);
    const result = await db.query(
      "UPDATE user_status SET user_status = 1 WHERE user_id = $1;",
      [user_id]
    );
    return result.rows[0];
  }
}

        
module.exports = new userController();
        
