const { v4: uuid } = require('uuid');

const tasks = [
  {
    id: '1',
    name: 'Walk my dog',
    isDone: false,
  },
  {
    id: '2',
    name: 'Sleep early',
    isDone: false,
  },
  {
    id: '3',
    name: 'Do math homework',
    isDone: false,
  },
  {
    id: '4',
    name: 'Wash the dishes',
    isDone: false,
  },
];

module.exports.getTasks = (req, res) => {
  res.status(200).send(tasks);
};

module.exports.createTask = (req, res) => {
  const { body } = req;
  const newTask = {
    ...body,
    id: uuid(),
  };
  tasks.push(newTask);

  res.status(201).send(tasks);
};

module.exports.getTask = (req, res) => {
  const { taskId } = req.params;

  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return res.status(404).send('Error 404: Task Not Found');
  }
  res.status(200).send(task);
};

module.exports.updateTask = (req, res) => {
  const { body } = req;
  const { taskId } = req.params;

  const foundedTaskId = tasks.findIndex(t => t.id === taskId);
  if (foundedTaskId === -1) {
    return res.status(404).send('Error 404: Task Not Found');
  }
  tasks[foundedTaskId] = { ...tasks[foundedTaskId], ...body };

  res.status(200).send(tasks[foundedTaskId]);
};

module.exports.deleteTask = (req, res) => {
  const { taskId } = req.params;

  const foundedTaskId = tasks.findIndex(t => t.id === taskId);
  if (foundedTaskId === -1) {
    return res.status(404).send('Error 404: Task Not Found');
  }
  tasks.splice(foundedTaskId, 1);
  res.status(204).send(tasks);
};
