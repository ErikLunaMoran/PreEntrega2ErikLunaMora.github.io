//registro de usuario

let nombre = prompt("ingresar nombre");
let apellido = prompt("Ingresar apellido");
let usuario = nombre + " " + apellido;
let salida = nombre + " " + apellido + " " + "fue ingresado";
alert(salida);

//localSotrage

localStorage.setItem("usuario", usuario);

//let usuarioEnLocalStorage = localStorage.getItem("usuario");

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

//JSON a string

const oficialJSON = JSON.stringify(dolarOficial);
localStorage.setItem("Oficial", oficialJSON);

const blueJSON = JSON.stringify(dolarBlue);
localStorage.setItem("Blue", blueJSON);

const tarjetaJSON = JSON.stringify(dolarTarjeta);
localStorage.setItem("Tarjeta", tarjetaJSON);

const turistaJSON = JSON.stringify(dolarTurista);
localStorage.setItem("Turista", turistaJSON);

const mepJSON = JSON.stringify(dolarMEP);
localStorage.setItem("MEP", mepJSON);

//JSON a objeto

const oficialOBG = JSON.parse(localStorage.getItem("Oficial"));
const blueOBG = JSON.parse(localStorage.getItem("Blue"));
const tarjetaOBG = JSON.parse(localStorage.getItem("Tarjeta"));
const turistaOBG = JSON.parse(localStorage.getItem("Turista"));
const mepOBG = JSON.parse(localStorage.getItem("MEP"));

//localStorage.setItem("Oficial", dolarOficial);

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
