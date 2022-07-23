// declaración de variables

let num1=15;
let num2=51;


//importación archivos independientes

let sumar=require("./sumar");
let restar=require("./restar");
let multiplicar=require("./multiplicar");
let dividir=require("./dividir");

console.log("Resultados archivos independientes:");
console.log(sumar(10,5));
console.log(restar(10,5));
console.log(multiplicar(10,5));
console.log(dividir(10,5));


//importación único archivo

let funciones=require("./funciones")

console.log("Resultados archivo único:");
console.log(funciones.sumar(10,5));
console.log(funciones.restar(10,5));
console.log(funciones.multiplicar(10,5));
console.log(funciones.dividir(10,5));


//importación único archivo funciones arrow

let flecha=require("./flecha")
console.log("Resultados arrow function:");
console.log(flecha.sumar(10,5));
console.log(flecha.restar(10,5));
console.log(flecha.multiplicar(10,5));
console.log(flecha.dividir(10,5));

