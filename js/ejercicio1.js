const formData1 = document.getElementById("formData1");
let contador = 0;

formData1.querySelector("#mostrar").textContent = 0;

const boton1 = formData1.querySelector("#decrementar");
boton1.addEventListener("click", (event) => {
  event.preventDefault();
  contador--;

  mostrar();

  formData1.querySelector("#mostrar").textContent = contador;
});

const boton2 = formData1.querySelector("#incrementar");
boton2.addEventListener("click", (event) => {
  event.preventDefault();
  contador++;

  mostrar();
  formData1.querySelector("#mostrar").textContent = contador;
});

const boton3 = formData1.querySelector("#limpiar");
boton3.addEventListener("click", (event) => {
  event.preventDefault();
  contador = 0;
  formData1.style.color = "black";

  formData1.querySelector("#mostrar").textContent = contador;
});

function mostrar() {
  if (contador > 0) {
    formData1.style.color = "green";
  } else if (contador < 0) {
    formData1.style.color = "red";
  } else {
    formData1.style.color = "black";
  }
}
