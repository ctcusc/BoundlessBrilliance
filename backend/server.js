const express = require("express");
require("dotenv").config();

const userController = require("./controller/user.controller");
const workshopController = require("./controller/workshop.controller");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// createWorkshop: given workshop params, post data to database
app.post("/api/createWorkshop", (req, res) => {
  workshopController
    .createWorkshop(req)
    .then(() =>
      res.status(201).json({
        status: "success",
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
    .then(() =>
      res.status(200).json({
        status: "success",
      })
    )
    .catch((err) => {
      return res.sendStatus(500).send({
        message: err.message || "API Error editWorkshop",
      });
    });
});

// editUser: updates the a member's info given the new user params and the user id
app.put("/api/editUser", (req, res) => {
  userController
    .editUser(req, req.body.user_id)
    .then(() =>
      res.status(200).json({
        status: "success",
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
    .then(() =>
      res.status(200).json({
        status: "success",
      })
    )
    .catch((err) => {
      return res.sendStatus(500).send({
        message: err.message || "API Error approveUser",
      });
    });
});

//rejectUser, removes user from master_users table
app.delete("/api/rejectUser", (req, res) => {
  userController
    .rejectUser(req.body.user_id)
    .then(() =>
      res.status(200).json({
        status: "success",
      })
    )
    .catch((err) => {
      return res.sendStatus(500).send({
        message: err.message || "API Error rejectUser",
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
  ).catch(err => {
    return res.sendStatus(500).send({
      message: err.message || "API Error validateUser"
    });;
  });
});

//acceptWorkshop : Updates workshop status for specific user as accepted
app.post('/api/acceptWorkshop', (req, res) => {
  workshopController.acceptWorkshop(req.body.user_id, req.body.workshop_id).then(
    data => res.status(200).json({
      api_status: "success",
      error: data
    })
  ).catch(err => {
    return res.sendStatus(500).send({
      message: err.message || "API Error acceptWorkshop"
    });;
  });
});

//declineWorkshop : Updates workshop status for specific user as accepted
app.post('/api/declineWorkshop', (req, res) => {
  workshopController.declineWorkshop(req.body.user_id, req.body.workshop_id).then(
    data => res.status(200).json({
      api_status: "success",
      error: data
    })
  ).catch(err => {
    return res.sendStatus(500).send({
      message: err.message || "API Error declineWorkshop"
    });;
  });
});

// validateUser: returns true if the user credentials are valid/user has been approved by admin, else false
// returns:
//auth_val: (-1 = Fail, 0 = User not verified, 1 = Pass)
//is_admin: (0 = User, 1 = Admin)
//user_id: (-1 = Fail, else all other cases = user_id)

app.post('/api/validateUser', (req, res) => {
  userController.validateUser(req).then(
    data => res.status(200).json({
      api_status: "success",
      authentication: data[0],
      user_type: data[1],
      user_id: data[2]
    })
  ).catch(err => {
    return res.sendStatus(500).send({
      message: err.message || "API Error validateUser"
    });;
  });
});


// assignUser: assigns a user to a workshop, returns assignment on success
app.post("/api/assignUser", (req, res) => {
  workshopController
    .assignUser(req.body.user_id, req.body.workshop_id)
    .then((data) =>
      res.status(200).json({
        status: "success",
        data: {
          workshop_assignment: data,
        },
      })
    )
    .catch((err) => {
      return res.sendStatus(500).send({
        message: err.message || "API Error assignUser",
      });
    });
});

app.get('/api/allActiveUsers', (req, res) => {
  userController.allActiveUsers(req)
    .then((data) =>
      res.status(200).json(data)
    )
    .catch((err) => {
      return res.sendStatus(500).send({
        message: err.message || "API Error allActiveUsers",
      });
    });
});

// returns details for workshop that have been undecided by the user
app.get("/api/undecidedWorkshop", (req, res) => {
  workshopController.undecidedWorkshops(req.query.id)
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/upcomingWorkshop", (req, res) => {
  workshopController.upcomingWorkshop(req.query.id)
    .then((data) =>
      res.status(200).json(data)
    );
});

//Admin Page APIs
app.get("/api/adminWorkshop", (req, res) => {
  workshopController.adminWorkshops()
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/adminSignups", (req, res) => {
  workshopController.adminSignups()
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/allActiveUserNames", (req, res) => {
  userController.allActiveUserNames()
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/allActiveUserIDName", (req, res) => {
  userController.allActiveUserIDName()
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/userAssignedWorkshop", (req, res) => {
  const { workshop_id } = req.query;
  userController.userAssignedWorkshop(workshop_id)
    .then((data) =>
      res.status(200).json(data)
    );
});

app.delete("/api/removeAssignment", (req, res) => {
  const { user_id } = req.query;
  const { workshop_id } = req.query;
  workshopController.removeAssignment(user_id, workshop_id)
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/userAssignedWorkshopStatusA", (req, res) => {
  const { workshop_id } = req.query;
  userController.userAssignedWorkshopStatusA(workshop_id)
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/userAssignedWorkshopStatusB", (req, res) => {
  const { workshop_id } = req.query;
  userController.userAssignedWorkshopStatusB(workshop_id)
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/userAssignedWorkshopStatusC", (req, res) => {
  const { workshop_id } = req.query;
  userController.userAssignedWorkshopStatusC(workshop_id)
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/generateMetrics", (req, res) => {
  userController.generateMetrics(req)
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/generateUserMetrics", (req, res) => {
  userController.generateUserMetrics()
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/generateWorkshopMetrics", (req, res) => {
  workshopController.generateWorkshopMetrics()
    .then((data) =>
      res.status(200).json(data)
    );
});

app.get("/api/generateGenderMetrics", (req, res) => {
  userController.generateGenderMetrics()
    .then((data) => {
      res.status(200).send(data);
    });
});

app.get("/api/generateEthnicityMetrics", (req, res) => {
  userController.generateEthnicityMetrics()
    .then((data) => {
      res.status(200).send(data);
    });
});

app.put("/api/approveAllUsers", (req, res) => {
  userController.approveAllUsers()
    .then(() => {
      res.status(200);
    });
});

// Start Backend Port 
app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
