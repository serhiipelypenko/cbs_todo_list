class TaskModel {

    id;
    title;
    done;
    creation_date;

    constructor(title,done = false) {
        this.title = title;
        this.done = done;
        this.id = Math.random().toString(20).substr(2, 10);
        this.creation_date = new Date().getTime();
    }

}