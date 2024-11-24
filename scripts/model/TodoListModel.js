class TodoListModel {
    tasks =[];

    constructor() {
    }

    addDefaultTasks(){
        this.tasks.push(new TaskModel('Купити хліб',true));
        this.tasks.push(new TaskModel('Забрати дитину з садочка',false));
        this.tasks.push(new TaskModel('Накормити черепаху',false));
    }
    addTask(title){
        return this.tasks.push(new TaskModel(title));
    }

    removeTask(id){
        this.tasks.splice(id,1);
    }

    updateStatus(id){
        this.tasks[id].done = !(this.tasks[id].done);
    }
    get tasks(){
        return this.tasks;
    }

}