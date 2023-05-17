//Llamo a objeto indicado

import { dolarBolsa } from "../index.js";

//registro de usuario

/* let nombre = prompt("ingresar nombre");
let apellido = prompt("Ingresar apellido");
let salida = nombre + " " + apellido + " " + "fue ingresado";
alert(salida); */

//llamar a LocalStorage de "usuario"

let usuarioEnLocalStorage = localStorage.getItem("usuario");

const txtOp1 = document.getElementById("op1");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

/* Evento */
btnCalcular.addEventListener("click", calcular);

function calcular() {
  const op1 = parseFloat(txtOp1.value);
  let resultado = dolarBolsa.valor * op1;

  if (isNaN(op1)) {
    pResultado.innerText = "Debe insertar números";
  } else {
    pResultado.innerText =
      usuarioEnLocalStorage +
      " " +
      "en total tenés: $" +
      resultado +
      " pesos" +
      " " +
      "almacenados como" +
      " " +
      dolarBolsa.nombre;
  }
}
