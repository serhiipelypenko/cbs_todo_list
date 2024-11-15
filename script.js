let tasks = [
    {
        title: 'Купити хліб',
        done: true,
    },
    {
        title: 'Забрати дитину з садочка',
        done: false,
    },
    {
        title: 'Накормити черепаху',
        done: false,
    }
];

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


for (let i = 0; i < tasks.length; i++) {
    let li = createListItem(tasks[i].title);
    if(tasks[i].done){
        li.classList.add("completed");
    }
    taskList.appendChild(li);
    taskInput.value = "";
}

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let li = createListItem(taskInput.value);
    taskList.appendChild(li);
    taskInput.value = "";
});

function createListItem(title) {
    if (title.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = title;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => li.remove());

    li.addEventListener("click", () => li.classList.toggle("completed"));
    li.appendChild(deleteBtn);

    return li;
}