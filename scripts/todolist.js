const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let todoList = new TodoListController(new TodoListView(), new TodoListModel());
todoList.initToDoList();