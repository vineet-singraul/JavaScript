function removeTask(task) {
    const index = todoList.indexOf(task);
    if (index > -1) {
        todoList.splice(index, 1);
        console.log(`Removed task: "${task}"`);
    } else {
        console.log(`Task not found: "${task}"`);
    }
}

removeTask("Read a book");
console.log(todoList);
