document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const taskText = taskInput.value;
        if (taskText.trim() === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => li.remove());

        li.addEventListener("click", () => li.classList.toggle("completed"));

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    });
});