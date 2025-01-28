function addTask(task) {
    todoList.push(task);
    console.log(`Added task: "${task}"`);
}

addTask("Finish homework");
addTask("Read a book");
console.log(todoList);
