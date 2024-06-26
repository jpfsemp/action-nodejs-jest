// __tests__/task-manager.test.js

const taskManager = require('../taskManager');

test('addTask should add a task to the task list', () => {
  taskManager.addTask('Buy groceries');
  expect(taskManager.listTasks()).toEqual([{ task: 'Buy groceries', completed: false }]);
});

test('completeTask should mark a task as completed', () => {
  taskManager.completeTask(0);
  expect(taskManager.listTasks()[0].completed).toBe(true);
});

test('listTasks should return the list of tasks', () => {
  expect(taskManager.listTasks()).toEqual([{ task: 'Buy groceries', completed: true }]);
});