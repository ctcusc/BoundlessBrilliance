const express = require("express"); //import express
require("dotenv").config(); //import enviornment

const userController = require("./controller/user.controller");
const workshopController = require("./controller/workshop.controller");
const app = express(); //create instance of express named "app"
const port = process.env.PORT || 3000; //define port value in .env, default to port 3000

app.use(express.json());

app.get("/api/apiTest", (req, res) => {
  res.status(200).json({
    status: "success",
    username: "rkuan",
    password: "password",
  });
  console.log("call to /api/test");
});

// createWorkshop: given workshop params, post data to database
app.post("/api/createWorkshop", (req, res) => {
  workshopController
    .createWorkshop(req)
    .then((data) =>
      res.status(201).json({
        status: "success",
        data: {
          workshop: data,
        },
      })
    )
    .catch((err) => {
      return res.sendStatus(500).send({
        message: err.message || "API Error createWorkshop",
      });
    });
});

// editWorkshop: updates the workshop given the new workshop params and the workshop id
app.put("/api/editWorkshop", (req, res) => {
  workshopController
    .editWorkshop(req, req.body.workshop_id)
    .then((data) =>
      res.status(200).json({
        status: "success",
        data: {
          workshop: data,
        },
      })
    )
    .catch((err) => {
      return res.sendStatus(500).send({
        message: err.message || "API Error editWorkshop",
      });
    });
});

// approveUser: changes user_status from 0 (waiting approval) to 1 (approved by admin)
app.put("/api/approveUser", (req, res) => {
  userController
    .approveUser(req.body.user_id)
    .then((data) =>
      res.status(200).json({
        status: "success",
        data: {
          workshop: data,
        },
      })
    )
    .catch((err) => {
      return res.sendStatus(500).send({
        message: err.message || "API Error approveUser",
      });
    });
});

//createUser : inserts user data into the database
app.post('/api/createUser', (req, res) => {
  userController.createUser(req).then(
      data => res.status(200).json({
          api_status: "success",
          error: data
        })
      ).catch(err=>{
      return res.sendStatus(500).send({
          message:err.message|| "API Error validateUser"
      });;
  });
});

// validateUser: returns true if the user credentials are valid/user has been approved by admin, else false
// returns:
// (-1, validation successful), (0, username doesnt exist), (1, password incorrect), (2, user has not been approved by admin), (3, other error)
app.get('/api/validateUser', (req, res) => {
    userController.validateUser(req).then(
        data => res.status(200).json({
            api_status: "success",
            user: {
              authentication: data,
            },
          })
        ).catch(err=>{
        return res.sendStatus(500).send({
            message:err.message|| "API Error validateUser"
        });;
    });
});

// Start Backend Port 
app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});