class TodoListView {

    controller;

    constructor() {
    }

    set controller(controller){
        this.controller = controller;
    }
    createListDefault(task,id){
        let li = this.createListItem(task.title,id);
        if(task.done){
            li.classList.add("completed");
        }
        taskList.appendChild(li);
    }

    createList(title,id){
        let li = this.createListItem(title,id);
        taskList.appendChild(li);
    }


    createListItem(title,id) {

        const li = document.createElement("li");
        li.textContent = title;
        li.dataset.id_task = id;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Прибрати";
        deleteBtn.addEventListener("click", () => this.controller.handlerRemoveTask(li), true);

        li.addEventListener("click", (event) => this.controller.handlerChangeStatusTask(event,li));
        li.appendChild(deleteBtn);

        return li;
    }
}