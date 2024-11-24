class TodoListController {

    view;
    model;

    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.view.controller = this;
    }
    defaultValue(){
        this.model.addDefaultTasks();
        for (let i = 0; i < this.model.tasks.length; i++) {
            this.view.createListDefault(this.model.tasks[i],i);
        }
        taskInput.value = "";
    }

    handlerAddNewTask(){
        taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (taskInput.value.trim() === "") return;
            let id_task = this.model.addTask(taskInput.value);
            this.view.createList(taskInput.value,id_task-1); //set number element in array
            taskInput.value = "";
            this.showAllTasks();
        });
    }

    handlerRemoveTask(li){
        this.model.removeTask(li.dataset.id_task);
        li.remove();
        this.updateIdTask();
        console.log('After remove task');
        this.showAllTasks();
    }

    updateIdTask (){
        let list = taskList.querySelectorAll('li');
        for (let i = 0; i < list.length; i++) {
            list[i].dataset.id_task = i;
        }
    }

    handlerChangeStatusTask(li){
        this.model.updateStatus(li.dataset.id_task);
        li.classList.toggle("completed");
        console.log('After update status');
        this.showAllTasks();
    }

    showAllTasks(){
        console.log(this.model.tasks);
    }

    initToDoList(){
        this.defaultValue();
        this.handlerAddNewTask();
        this.showAllTasks();
    }

}