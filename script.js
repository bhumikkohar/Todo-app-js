let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li span").forEach(function (task) {
        tasks.push(task.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener("click", function () {

    let taskText = taskInput.value;

    if (taskText === "") return;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    saveTasks();
})

window.onload = function () {

    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(function (task) {

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task;

        span.addEventListener("click", function () {
            span.classList.toggle("completed");
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function () {
            li.remove();
            saveTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });

}