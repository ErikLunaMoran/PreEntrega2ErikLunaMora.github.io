//registro de usuario
/* let nombre = prompt("ingresar nombre");
let apellido = prompt("Ingresar apellido");
let salida = nombre + " " + apellido + " " + "fue ingresado";
alert(salida); */

// Objetos
//Constructor

function Moneda(nombre, valor) {
  this.nombre = nombre;
  this.valor = valor;
}

export const dolarOficial = new Moneda("Dolar Oficial", 231.07);
export const dolarBlue = new Moneda("Dolar Blue", 474.0);
export const dolarTarjeta = new Moneda("Dolar Tarjeta", 385.44);
export const dolarTurista = new Moneda("Dolar Turista", 440.5);
export const dolarMEP = new Moneda("Dolar MEP", 390.71);

//ARRAY

let arreglo = ["Oficial", "Blue", "Tarjeta", "Turista", "MEP"];

//obtener valor de array

console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);
console.log(arreglo[3]);
console.log(arreglo[4]);

//Agregar elemento
arreglo[5] = "Bolsa";

//Agregar elemento usando método Push
arreglo.push("Crypto");

//Agregar a constructor de Objetos
export const dolarBolsa = new Moneda("Dolar Bolsa", 428.83);
export const dolarCrypto = new Moneda("Dolar Crypto", 28765.0);

console.log(arreglo);
