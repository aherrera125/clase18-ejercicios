let tasks = JSON.parse(localStorage.getItem("tasksStorage")) || [];
let taskList = formData2.querySelector("#display");
const button = document.getElementById("addTask");
const allTasks = document.getElementById("allTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

button.addEventListener("click", (event) => {
  event.preventDefault();
  taskList.innerHTML = "";

  let taskName = formData2.querySelector("#taskName").value;
  formData2.querySelector("#taskName").value = "";

  const taskObject = {
    name: taskName,
    completed: false,
  };
  tasks.push(taskObject);
  saveStorage();
  render("all");
});

allTasks.addEventListener("change", (e) => {
  saveStorage();
  render("all");
});

completedTasks.addEventListener("change", (e) => {
  saveStorage();
  render("completed");
});

pendingTasks.addEventListener("change", (e) => {
  saveStorage();
  render("pending");
});

function render(typeOp) {
  taskList.textContent = "";
  switch (typeOp) {
    case "all":
      tasks.forEach((task) => {
        const li = document.createElement("li");

        const chkCompleted = document.createElement("input");
        chkCompleted.type = "radio";
        chkCompleted.style.accentColor = "green";
        chkCompleted.checked = task.completed;

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "X";

        chkCompleted.addEventListener("change", () => {
          task.completed = chkCompleted.checked;
          saveStorage();
          render("all");
        });

        btnDelete.addEventListener("click", () => {
          const index = tasks.indexOf(task);
          if (index > -1) {
            tasks.splice(index, 1);
          }
          saveStorage();
          render("all");
        });

        const span = document.createElement("span");
        span.textContent = task.name;

        li.appendChild(chkCompleted);
        li.appendChild(btnDelete);
        li.appendChild(span);
        taskList.appendChild(li);
      });
      break;
    case "completed":
      tasks.forEach((task) => {
        if (task.completed) {
          const li = document.createElement("li");

          const chkCompleted = document.createElement("input");
          chkCompleted.type = "radio";
          chkCompleted.style.accentColor = "green";
          chkCompleted.checked = task.completed;

          const btnDelete = document.createElement("button");
          btnDelete.textContent = "X";

          chkCompleted.addEventListener("change", () => {
            task.completed = chkCompleted.checked;
            saveStorage();
            render("all");
          });

          btnDelete.addEventListener("click", () => {
            const index = tasks.indexOf(task);
            if (index > -1) {
              tasks.splice(index, 1);
            }
            saveStorage();
            render("all");
          });

          const span = document.createElement("span");
          span.textContent = task.name;

          li.appendChild(chkCompleted);
          li.appendChild(btnDelete);
          li.appendChild(span);
          taskList.appendChild(li);
        }
      });
      break;
    case "pending":
      tasks.forEach((task) => {
        if (!task.completed) {
          const li = document.createElement("li");

          const chkCompleted = document.createElement("input");
          chkCompleted.type = "radio";
          chkCompleted.style.accentColor = "green";
          chkCompleted.checked = task.completed;

          const btnDelete = document.createElement("button");
          btnDelete.textContent = "X";

          chkCompleted.addEventListener("change", () => {
            task.completed = chkCompleted.checked;
            saveStorage();
            render("all");
          });

          btnDelete.addEventListener("click", () => {
            const index = tasks.indexOf(task);
            if (index > -1) {
              tasks.splice(index, 1);
            }
            saveStorage();
            render("all");
          });

          const span = document.createElement("span");
          span.textContent = task.name;

          li.appendChild(chkCompleted);
          li.appendChild(btnDelete);
          li.appendChild(span);
          taskList.appendChild(li);
        }
      });
      break;
  }
}

function saveStorage() {
  localStorage.setItem("tasksStorage", JSON.stringify(tasks));
}

render("all");
