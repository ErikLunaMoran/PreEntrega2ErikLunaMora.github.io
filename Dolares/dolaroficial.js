//Resultado
/* let dolarOficial = 212;
let dolarTengo = 300;
let multiplicacionOficial = dolarOficial * dolarTengo;
console.log("$" + multiplicacionOficial + " tenes guardados en el banco");

function multiplicacionOficial() {

} */

//registro de usuario
let nombre = prompt("ingresar nombre");
let apellido = prompt("Ingresar apellido");
let salida = nombre + " " + apellido + " " + "fue ingresado";
alert(salida);

const txtOp1 = document.getElementById("op1");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");
const dolarOficial = 220.25;

btnCalcular.addEventListener("click", calcular);

function calcular() {
  const op1 = parseFloat(txtOp1.value);
  let resultado = dolarOficial * op1;

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
      " pesos";
  }
}

//NaN: Is Not a Number
//if(isNaN(op1));

//console.log("tenes pesos" + resultado);
