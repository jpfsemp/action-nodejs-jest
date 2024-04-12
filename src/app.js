// app.js
const taskManager = require('./taskManager');

taskManager.addTask('Buy groceries');
taskManager.addTask('Walk the dog');

const tasks = taskManager.listTasks();
console.log(tasks);

taskManager.completeTask(0);

const updatedTasks = taskManager.listTasks();
console.log(updatedTasks);