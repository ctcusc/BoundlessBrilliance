require("dotenv").config();
const cors = require("cors");
const db = require("../db");
const morgan = require("morgan");
const bcrypt = require('bcrypt');
const e = require("cors");

class userController {

  async createUser(req) {
    // Sprint 0: Wonjun
    try {
      const hashedPassword = await bcrypt.hash(req.body.user_password, 10);

      await db.query(
        "INSERT INTO master_users (user_firstname, user_lastname, user_ethnicity, user_phone_number, user_email, user_password, user_type) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [req.body.user_firstname, req.body.user_lastname, req.body.user_ethnicity, req.body.user_phone_number, req.body.user_email, hashedPassword, req.body.user_type]
      );

      const idQuery = await db.query(
        "select user_id from master_users WHERE user_email = $1",
        [req.body.user_email]
      );
      const user_id = idQuery.rows[0].user_id;

      await db.query(
        "INSERT INTO user_status (user_id, user_status) VALUES ($1, 0);",
        [user_id]
      );
    } catch (error){
      return error; 
    }
  }

  async validateUser(req) {
     // Sprint 0: Evans
     try{
         const idQuery = await db.query(
             "select user_id from master_users WHERE user_email = $1",
             [req.body.user_email]
         );

         if (idQuery.rows.length == 0) { //username doesn't exist
             return 0;
         }
         else {
            const user_id = idQuery.rows[0].user_id;
            
            const passwordQuery = await db.query( //get password
              "select user_password from master_users WHERE user_id = $1",
              [user_id]
            );

            const password = passwordQuery.rows[0].user_password;
            const flag = await bcrypt.compare(req.body.user_password, password);

            if (flag == false){ //compare password
              return 1;
            }
 
             const statusQuery = await db.query( //get user status
                 "select user_status from user_status WHERE user_id = $1",
                 [user_id]
             );
 
            const userStatus = statusQuery.rows[0].user_status;  // 0 = Not Approved, 1 = Approved

            if (userStatus == 0){
                return 2; // user not approved
            }
            else{
                return -1; 
            }
         } 
         }catch (error){
             return 3; // other error cases
         }
  }

  async approveUser(user_id) {
    // Sprint 0: Fred
    const result = await db.query(
      "UPDATE user_status SET user_status = 1 WHERE user_id = $1;",
      [user_id]
    );
    return result.rows[0];
  }

  async rejectUser(user_id) {
    // Sprint 1: Fred
    const result = await db.query(
      "DELETE FROM master_users WHERE user_id = $1;",
      [user_id]
    );
    return result.rows[0];
  }
}
        
module.exports = new userController();   