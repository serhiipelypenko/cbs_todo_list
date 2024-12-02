class TodoListView {

    constructor() {
    }

    createListItem(task) {
        const li = document.createElement("li");
        const paragraph = document.createElement("p");
        paragraph.textContent = task['title'];
        li.append(paragraph);
        li.dataset.id_task = task['id'];
        if(task['done']){
            li.classList.add('completed');
        }
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Прибрати";
        li.appendChild(deleteBtn);
        return li;
    }

    renderTodoList(data){
        taskList.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            let li = this.createListItem(data[i]);
            taskList.appendChild(li);
        }
    }
}