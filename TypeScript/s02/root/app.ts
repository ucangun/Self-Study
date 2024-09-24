const input = document.getElementById("todoInput") as HTMLInputElement;
const addBtn = document.getElementById("addTodoBtn") as HTMLButtonElement;
const list = document.getElementById("todoList") as HTMLUListElement;

// {
//   task:"asd",
//   status:0-1
// }

const enum Status {
  Active,
  Completed,
}

interface ITask {
  task: string;
  status: Status;
}

let tasks: ITask[] = [];

const updateList = () => {
  list.innerHTML = "";
  tasks.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.task;
    li.classList.add(item.status === Status.Completed ? "completed" : "active");
    list.appendChild(li);
  });
};

addBtn.addEventListener("click", () => {
  const newTask = input.value.trim();

  if (newTask) {
    tasks.push({ task: newTask, status: Status.Active });
    console.log(tasks);
    updateList();
    input.value = "";
  }
});
