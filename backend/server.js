const express = require("express"); //import express
require("dotenv").config(); //import enviornment

const userController = require("./controller/user.controller");
const workshopController = require("./controller/workshop.controller");
const app = express(); //create instance of express named "app"
const port = process.env.PORT || 3000; //define port value in .env, default to port 3000

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.status(200).json({
    status: "success",
    username: "rkuan",
    password: "password",
  });
  console.log("call to /api/test");
});

app.post("/api/createUser", (req, res) => {
  userController.createUser().then((data) => res.json(data));
});

app.get("/api/example", (req, res) => {
  console.log(req.body.id);
  userController
    .validateUser(req)
    .then((data) => res.json(data))
    .catch((err) => {
      return res.sendStatus(500).send({
        message: err.message || "some error occured",
      });
    });
});

// Olivia sprint 0 test
app.post("/api/createWorkshop", (req, res) => {
  console.log(req.body.workshop_name);
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

app.put("/api/editWorkshop", (req, res) => {
  console.log(req.body.workshop_name);
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

// Fred sprint 0
app.put("/api/approveUser", (req, res) => {
  console.log(req.body.user_id);
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
        message: err.message || "API Error editWorkshop",
      });
    });
});

// app.post('/api/task', (req, res) => {
//     console.log(req.body);
//     taskController.createTask(req.body.task).then(data => res.json(data));
// });

// app.put('/api/task', (req, res) => {
//     taskController.updateTask(req.body.task).then(data => res.json(data));
// });

// app.delete('/api/task/:id', (req, res) => {
//     taskController.deleteTask(req.params.id).then(data => res.json(data));
// });

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
