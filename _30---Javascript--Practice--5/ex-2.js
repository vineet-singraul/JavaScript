let todoList = [];
let completedTasks = [];

function addTask(task) {
    todoList.push(task);
    console.log(`Added task: "${task}"`);
}

function removeTask(task) {
    const index = todoList.indexOf(task);
    if (index > -1) {
        todoList.splice(index, 1);
        console.log(`Removed task: "${task}"`);
    } else {
        console.log(`Task not found: "${task}"`);
    }
}

function viewTasks() {
    console.log("Current Tasks:");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

function completeTask(task) {
    if (todoList.includes(task)) {
        completedTasks.push(task);
        removeTask(task);
        console.log(`Completed task: "${task}"`);
    }
}

function findTask(task) {
    const foundTask = todoList.find(t => t === task);
    if (foundTask) {
        console.log(`Found task: "${foundTask}"`);
    } else {
        console.log(`Task not found: "${task}"`);
    }
}

function sortTasks() {
    todoList.sort();
    console.log("Tasks sorted:");
    viewTasks();
}

addTask("Finish homework");
addTask("Read a book");
viewTasks();
completeTask("Finish homework");
viewTasks();
findTask("Read a book");
sortTasks();
