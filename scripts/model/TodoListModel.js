class TodoListModel {
    tasks =[];
    view;
    constructor(view) {
        this.view = view;
    }

    addTask(title){
        this.tasks.push(new TaskModel(title));
        this.view.renderTodoList(this.tasks);
    }

    removeTask(id){
        for (let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i]['id'] === id){
                this.tasks.splice(i,1);
            }
        }
        this.view.renderTodoList(this.tasks);
    }

    updateStatus(id){
        for (let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i]['id'] === id){
                this.tasks[i].done = !(this.tasks[i].done);
            }
        }
        this.view.renderTodoList(this.tasks);
    }
    get tasks(){
        return this.tasks;
    }

}