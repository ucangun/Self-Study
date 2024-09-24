const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");
let tasks = [];
const updateList = () => {
    list.innerHTML = "";
    tasks.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item.task;
        li.classList.add(item.status === 1 /* Status.Completed */ ? "completed" : "active");
        list.appendChild(li);
    });
};
addBtn.addEventListener("click", () => {
    const newTask = input.value.trim();
    if (newTask) {
        tasks.push({ task: newTask, status: 0 /* Status.Active */ });
        console.log(tasks);
        updateList();
        input.value = "";
    }
});
