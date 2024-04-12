// taskManager.js
const tasks = [];

const addTask = (task) => {
    tasks.push(
        {
            task,
            completed: false
        }
    );
}

const listTasks = () => {
    return tasks;
}

const completeTask = (index) => {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
    }
}

module.exports = { addTask, listTasks, completeTask };