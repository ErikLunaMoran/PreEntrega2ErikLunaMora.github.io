//Llamo a objeto indicado

import { dolarOficial } from "../index.js";

//registro de usuario
let nombre = prompt("ingresar nombre");
let apellido = prompt("Ingresar apellido");
let salida = nombre + " " + apellido + " " + "fue ingresado";
alert(salida);

const txtOp1 = document.getElementById("op1");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");
/* const dolarOficial = 220.25; */

btnCalcular.addEventListener("click", calcular);

function calcular() {
  const op1 = parseFloat(txtOp1.value);
  let resultado = dolarOficial.valor * op1;

  if (isNaN(op1)) {
    pResultado.innerText = "Debe insertar números";
  } else {
    pResultado.innerText =
      nombre +
      " " +
      apellido +
      " " +
      "en total tenés: $" +
      resultado +
      " pesos" +
      " " +
      "almacenados como" +
      " " +
      dolarOficial.nombre;
  }
}

//NaN: Is Not a Number
//if(isNaN(op1));

//console.log("tenes pesos" + resultado);
