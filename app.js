const express = require('express');
const app = express();
app.use(express.json());

const {
  createTask,
  getTask,
  getTasks,
  updateTask,
  deleteTask,
} = require('./controllers/toDoTasksControllers');

app.get('/tasks', getTasks);
app.get('/tasks/:taskId', getTask);
app.post('/tasks', createTask);
app.patch('/tasks/:taskId', updateTask);
app.delete('/tasks/:taskId', deleteTask);

module.exports = app;