class TodoListController {

    model;
    sort_arrow = false;

    constructor(model) {
        this.model = model;
        this.initHandlers();
    }

    handlerAddNewTask(){
        taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (taskInput.value.trim() === "") return;
            this.model.addTask(taskInput.value);
            taskInput.value = "";
        });
    }

    initHandlers(){
        document.body.querySelector('ul').
        addEventListener('click', (event) => this.handlerTasks(event));

        document.getElementById('show_all').addEventListener('click', this.showAllTask.bind(this));
        document.getElementById('show_active').addEventListener('click', this.showActiveTask.bind(this));
        document.getElementById('sort_by_date').addEventListener('click', this.sortByDateTask.bind(this));
        document.getElementById('clear_all').addEventListener('click', this.clearAllTasks.bind(this));
    }

    showAllTask(){
        this.model.allTask();
    }

    showActiveTask(){
        this.model.activeTask();
    }

    sortByDateTask(){
        if(this.model.sort_type === 'desc'){
            this.model.sort_type = 'asc';
            this.sort_arrow = false;
        }else{
            this.model.sort_type = 'desc';
            this.sort_arrow = true;
        }
        const arrow = document.getElementById("arrow");
        arrow.textContent = this.sort_arrow ? "↑" : "↓";
        this.model.sortByTime();
    }

    clearAllTasks(){
        this.model.removeAllTasks();
    }

    handlerTasks(event){
        if(event.target.nodeName.toLowerCase() === 'li') {
            this.handlerChangeStatusTask(event.target);
        }else if(event.target.nodeName.toLowerCase() === 'button'){
            this.handlerRemoveTask(event.target.parentNode);
        }
    }

    handlerRemoveTask(li){
        this.model.removeTask(li.dataset.id_task);
    }

    handlerChangeStatusTask(li){
        this.model.updateStatus(li.dataset.id_task);
    }

    initToDoList(){
        this.handlerAddNewTask();
    }

}