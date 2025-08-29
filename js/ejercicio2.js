let myArray = [];
let render = "";

const boton = document.getElementById("agregar");
boton.addEventListener("click", (event) => {
  event.preventDefault();

  let nombreTarea = formData2.querySelector("#nombreTarea").value;

  myArray.push(nombreTarea);

  formData2.querySelector("#nombreTarea").value = "";

  formData2.querySelector("#mostrar").innerHTML = `<ul>${renderizar()}</ul>`;
});

function renderizar() {
  render = "";
  for (let i = 0; i < myArray.length; i++) {
    render += `<li>${myArray[i]}</li>`;
  }
  return render;
}
