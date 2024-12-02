class TodoListModel {
    tasks =[];
    original_tasks = [];
    view;
    sort_type = 'asc';
    sort_method = -1;

    constructor(view) {
        this.view = view;
    }

    addTask(title){
        let new_task = new TaskModel(title);
        this.tasks.push(new_task);
        this.original_tasks.push(new_task);
        this.view.renderTodoList(this.tasks);
    }

    removeTask(id){
        for (let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i]['id'] === id){
                this.tasks.splice(i,1);
            }
        }
        for (let i = 0; i < this.original_tasks.length; i++) {
            if(this.original_tasks[i]['id'] === id){
                this.original_tasks.splice(i,1);
            }
        }
        this.view.renderTodoList(this.tasks);
    }

    removeAllTasks(){
        this.tasks = [];
        this.original_tasks = [];
        this.view.renderTodoList(this.tasks);
    }

    activeTask(){
        this.tasks = this.tasks.filter(this.filterActiveTask.bind(this));
        this.view.renderTodoList(this.tasks);
    }

    filterActiveTask(task){
        return !task['done'];
    }

    allTask(){
        this.tasks = Object.assign(this.original_tasks);
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

    sortByTime(){
        if(this.sort_type === 'asc'){
            this.sort_method = -1;
        }else{
            this.sort_method = 1;
        }
        this.tasks.sort(this.sortByDate.bind(this));
        this.original_tasks.sort(this.sortByDate.bind(this));
        this.view.renderTodoList(this.tasks);
    }

    sortByDate(a,b){
        if(a.creation_date < b.creation_date){
            return 1*this.sort_method;
        }
        if(a.creation_date > b.creation_date){
            return -1*this.sort_method;
        }
        return 0;
    }

    set sort_type(value){
        this.sort_type = value;
    }
    get tasks(){
        return this.tasks;
    }

}