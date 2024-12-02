class TodoListController {

    model;

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


let isAscending = false;

function toggleSort() {
    const arrow = document.getElementById("arrow");
    isAscending = !isAscending;
    arrow.textContent = isAscending ? "↑" : "↓";
}