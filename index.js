const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const port = 3001
const tasks = []

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/tasks', (req, res) => {
  res.send(tasks)
})
app.post('/tasks',(req,res) => {
 const task = req.body;
 tasks.push(task);
 res.status(201).send(task)
 console.log(req.body)

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})