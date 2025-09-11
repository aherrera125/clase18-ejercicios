let tasks = [];
let taskList = formData2.querySelector("#display");
const button = document.getElementById("addTask");
const allTasks = document.getElementById("allTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

button.addEventListener("click", (event) => {
  event.preventDefault();
  taskList.innerHtml = "";

  let taskName = formData2.querySelector("#taskName").value;
  formData2.querySelector("#taskName").value = "";

  const taskObject = {
    name: taskName,
    completed: false,
  };
  tasks.push(taskObject);
  renderizar("all");
});

allTasks.addEventListener("change", (e) => {
  renderizar("all");
});

completedTasks.addEventListener("change", (e) => {
  renderizar("completed");
});

pendingTasks.addEventListener("change", (e) => {
  renderizar("pending");
});

function renderizar(typeOp) {
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
          renderizar("all");
        });

        btnDelete.addEventListener("click", () => {
          const index = tasks.indexOf(task);
          if (index > -1) {
            tasks.splice(index, 1);
          }
          renderizar("all");
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
            renderizar("all");
          });

          btnDelete.addEventListener("click", () => {
            const index = tasks.indexOf(task);
            if (index > -1) {
              tasks.splice(index, 1);
            }
            renderizar("all");
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
            renderizar("all");
          });

          btnDelete.addEventListener("click", () => {
            const index = tasks.indexOf(task);
            if (index > -1) {
              tasks.splice(index, 1);
            }
            renderizar("all");
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
