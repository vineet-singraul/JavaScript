function sortTasks() {
    todoList.sort();
    console.log("Tasks sorted:");
    viewTasks();
}

addTask("Study for exams");
addTask("Grocery shopping");
sortTasks();
