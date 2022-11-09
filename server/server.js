const express = require("express") //import express 
require('dotenv').config() //import enviornment

const app = express(); //create instance of express named "app"
const port = process.env.PORT || 3000; //define port value in .env, default to port 3000

app.get('/api/tasks', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

app.post('/api/task', (req, res) => {
    console.log(req.body);
    taskController.createTask(req.body.task).then(data => res.json(data));
});

app.put('/api/task', (req, res) => {
    taskController.updateTask(req.body.task).then(data => res.json(data));
});

app.delete('/api/task/:id', (req, res) => {
    taskController.deleteTask(req.params.id).then(data => res.json(data));
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})

