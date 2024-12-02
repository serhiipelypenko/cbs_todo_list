class TaskModel {

    title;
    done;

    constructor(title,done = false) {
        this.title = title;
        this.done = done;
        this.id = Math.random().toString(20).substr(2, 10);
    }

}