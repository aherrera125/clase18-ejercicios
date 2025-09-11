let tasks = [];
let taskList = formData2.querySelector("#display");
const button = document.getElementById("addTask");

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
  renderizar();
});

function renderizar() {
  taskList.textContent = "";
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
      renderizar();
    });

    btnDelete.addEventListener("click", () => {
      const index = tasks.indexOf(task);
      if (index > -1) {
        tasks.splice(index, 1);
      }
      renderizar();
    });

    const span = document.createElement("span");
    span.textContent = task.name;

    li.appendChild(chkCompleted);
    li.appendChild(btnDelete);
    li.appendChild(span);
    taskList.appendChild(li);
  });
}
