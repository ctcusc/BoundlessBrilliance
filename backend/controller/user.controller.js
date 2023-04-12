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

      const alreadyExist = await db.query( //get password
              "select count(user_email) from master_users where user_email = $1",
              [req.body.user_email]
            );
        
      const isValid = alreadyExist.rows[0].count;
      if (isValid == 0){
        await db.query(
          "INSERT INTO master_users (user_firstname, user_lastname, user_chapter, user_phone, user_ethnicity, user_email, user_password, user_gender, is_admin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 0)",
          [req.body.user_firstname, req.body.user_lastname, req.body.user_chapter, req.body.user_phone, req.body.user_ethnicity, req.body.user_email, req.body.user_password, req.body.user_gender]
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
      }
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
             return [-1, -1, -1];
         }
         else {
            const user_id = idQuery.rows[0].user_id;
            
            const passwordQuery = await db.query( //get password
              "select user_password from master_users WHERE user_id = $1",
              [user_id]
            );

            const stored_password = passwordQuery.rows[0].user_password;
            const entered_password = req.body.user_password;

            if (stored_password != entered_password){ //compare password
              return [-1, -1, -1];
            }
 
             const statusQuery = await db.query( //get user status
                 "select user_status from user_status WHERE user_id = $1",
                 [user_id]
             );
 
            const userStatus = statusQuery.rows[0].user_status;  // 0 = Not Approved, 1 = Approved

            const isAdminQuery = await db.query( //get user status
                 "select is_admin from master_users WHERE user_id = $1",
                 [user_id]
             );

            const isAdmin = isAdminQuery.rows[0].is_admin;

            if (userStatus == 0){
                return [0, 0, -1]; // user not approved
            }
            else{
                if (isAdmin == 1){
                  return [1, 1, user_id];
                } else {
                  return [1, 0, user_id]; 
                }
            }
         } 
         }catch (error){
             return [-1, -1, -1]; // other error cases
         }
  }

  async approveUser(user_id) {
    // Sprint 0: Fred
    try{
      const result = await db.query(
        "UPDATE user_status SET user_status = 1 WHERE user_id = $1;",
        [user_id]
      );
      return result.rows[0];
      } catch(error){
        return error;
      }
  }

  async rejectUser(user_id) {
    // Sprint 1: Fred
    try {
        const result = await db.query(
          "DELETE FROM user_status WHERE user_id = $1;",
          [user_id]
        );

        const res = await db.query(
          "DELETE FROM master_users WHERE user_id = $1;",
          [user_id]
        );

        return result;
    } catch(error){
        return error;
    }
  }

  async editUser(req, user_id) {
    try {
        const result = await db.query(
            "UPDATE master_users SET user_firstname = $1, user_lastname = $2, user_chapter = $3, user_phone = $4, user_ethnicity = $5, user_email = $6, user_gender = $7 WHERE user_id = $8;",
            [req.body.user_firstname, req.body.user_lastname, req.body.user_chapter, req.body.user_phone, req.body.user_ethnicity, req.body.user_email, req.body.user_gender, user_id]
        );
        return result.rows[0];
    } catch (error){
        return error;
    } 
  }

  async allActiveUsers(req) {
    // Sprint 1: Olivia
    try {
      const result = await db.query(`
      SELECT *
      FROM master_users
      JOIN user_status ON master_users.user_id = user_status.user_id
      WHERE user_status.user_status = 1;
      `);
      return result.rows;
    } catch(error){
      return error;
    }
  }

  async allActiveUserNames() {
    try {
      const result = await db.query(`
      SELECT master_users.user_id, CONCAT(user_firstname, ' ', user_lastname) AS Name
      FROM master_users
      JOIN user_status ON master_users.user_id = user_status.user_id
      WHERE user_status.user_status = 1;
      `);
      var res = []
      for (let i = 0;i < result.rows.length;i ++) {
        res.push(result.rows[i].name);
      }
      return res;
    } catch(error){
      return error;
    }
  }

  async allActiveUserIDName() {
    try {
      const result = await db.query(`
      SELECT master_users.user_id, CONCAT(user_firstname, ' ', user_lastname) AS Name
      FROM master_users
      JOIN user_status ON master_users.user_id = user_status.user_id
      WHERE user_status.user_status = 1;
      `);
      var res = []
      for (let i = 0;i < result.rows.length;i ++) {
        res.push(result.rows[i].name);
      }
      return result.rows;
    } catch(error){
      return error;
    }
  }

  async userAssignedWorkshop(workshop_id) {
    try {
      const result = await db.query(`
      SELECT CONCAT(user_firstname, ' ', user_lastname) AS Name
      FROM master_users
      JOIN workshop_assignments ON master_users.user_id = workshop_assignments.user_id
      WHERE workshop_assignments.workshop_id = $1;
      `,[workshop_id]);
      var res = []
      for (let i = 0;i < result.rows.length;i ++) {
        res.push(result.rows[i].name);
      }
      return res;
    } catch(error){
      return error;
    }
  }

  async userAssignedWorkshopStatusA(workshop_id) {
    try {
      const result = await db.query(`
      SELECT CONCAT(user_firstname, ' ', user_lastname) AS Name
      FROM master_users
      JOIN workshop_assignments ON master_users.user_id = workshop_assignments.user_id
      WHERE workshop_assignments.workshop_id = $1 and workshop_assignments.has_accepted = 1;
      `,[workshop_id]);
      var res = []
      for (let i = 0;i < result.rows.length;i ++) {
        res.push(result.rows[i].name);
      }
      return res;
    } catch(error){
      return error;
    }
  }

  async userAssignedWorkshopStatusB(workshop_id) {
    try {
      const result = await db.query(`
      SELECT CONCAT(user_firstname, ' ', user_lastname) AS Name
      FROM master_users
      JOIN workshop_assignments ON master_users.user_id = workshop_assignments.user_id
      WHERE workshop_assignments.workshop_id = $1 and workshop_assignments.has_accepted = 0;
      `,[workshop_id]);
      var res = []
      for (let i = 0;i < result.rows.length;i ++) {
        res.push(result.rows[i].name);
      }
      return res;
    } catch(error){
      return error;
    }
  }

  async userAssignedWorkshopStatusC(workshop_id) {
    try {
      const result = await db.query(`
      SELECT CONCAT(user_firstname, ' ', user_lastname) AS Name
      FROM master_users
      JOIN workshop_assignments ON master_users.user_id = workshop_assignments.user_id
      WHERE workshop_assignments.workshop_id = $1 and workshop_assignments.has_accepted = -1;
      `,[workshop_id]);
      var res = []
      for (let i = 0;i < result.rows.length;i ++) {
        res.push(result.rows[i].name);
      }
      return res;
    } catch(error){
      return error;
    }
  }
  
  async generateMetrics(req) {
    // Make queries for users and workshop tables
    try {
      const userQueryResults = await db.query(
          "SELECT * FROM master_users;"
      );
      const workshopQueryResults = await db.query(
          "SELECT COUNT(*) FROM workshop;"
      );

      // Access query results
      const userArray = userQueryResults?.rows ?? [];
      const workshop_count = workshopQueryResults?.rows?.[0]?.count ?? 0;

      let metrics = {
        "ethnicity": {},
        "age": {},
        "gender": {},
        "users": userArray.length,
        "workshops": workshop_count
      };

      // Loop through users to generate metrics
      for(const user of userArray) {
        if (user.user_ethnicity) {
          metrics["ethnicity"][user.user_ethnicity] = (metrics["ethnicity"][user.user_ethnicity] || 0) + 1;
        }
        if (user.user_age) {
          metrics["age"][user.user_age] = (metrics["age"][user.user_age] || 0) + 1;
        }
        if (user.user_gender) {
          metrics["gender"][user.user_gender] = (metrics["gender"][user.user_gender] || 0) + 1;
        }
      }

      return metrics;
    } catch(error){
      return error;
    }
  }
} 
        
module.exports = new userController();   