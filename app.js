const express = require('express');
const { controllers } = require('./controllers');
const { errHandlers, mws } = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/tasks', mws.validateTask, controllers.createTask);
app.get('/tasks', controllers.getTasks);
app.get('/tasks/:taskId', controllers.getTask);
app.patch('/tasks/:taskId', mws.validateTask, controllers.updateTask);
app.delete('/tasks/:taskId', controllers.deleteTask);

app.use(errHandlers.validationErrorHandler, errHandlers.errorHandler);

module.exports = app;
