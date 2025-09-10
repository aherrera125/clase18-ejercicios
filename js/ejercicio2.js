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
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderizar();
    });

    const span = document.createElement("span");
    span.textContent = task.name;

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
  });
}
