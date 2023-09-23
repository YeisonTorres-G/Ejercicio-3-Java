/*
ejecicio 1
var edad1=prompt("Ingrese su edad");

if (edad1 >= 18) {
  alert("Eres mayor de edad.");
} else {
  alert("Eres menor de edad.");
}
EJERCICIO 2
var nota1=prompt("Ingrese su nota 1");
var nota2=prompt("Ingrese su nota 2");
var nota3=prompt("Ingrese su nota 3");

const prom1= parseInt(nota1)+parseInt(nota2)+parseInt(nota3);
const div= prom1/3;

alert("Su promedio de noota es: "+div);

if(div >= 3)
    alert("paso")
else
    alert("perdio")

EJERCICIO 3

var numero1=prompt("Numero A");
var numero2=prompt("Numero B");

if (numero1 > numero2) {
    alert(numero1 + " es mayor que " + numero2);
  } else if (numero1 < numero2) {
    alert(numero1 + " es menor que " + numero2);
  } else {
    alert(numero1 + " es igual a " + numero2);
  }
EJERCICIO 4
  
// Actividad 4
let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(prompt("Ingresa un número: "));
}

numeros.sort((a, b) => a - b);

for (let numero of numeros) {
  alert(numero);
}

ejercicio 5

var peso=prompt("Ingrese su peso");

if (peso < 40) {
    alert("Bajo peso");
  } else if (peso >= 41 && peso <= 70) {
    alert ("Peso promedio");
  } else {
    alert ("Sobrepeso");
  }

ejercicio 6
let numero=parseInt(prompt("Ingrese numero")) ;
  switch (numero) {
    case 1: (1)
      alert ("Lunes");
      break;
    case 2: 
      alert ("Martes");
      break;
    case 3: 
      alert ("Miércoles");
      break;
    case 4: 
      alert ("Jueves");
      break;
    case 5: 
      alert ("Viernes");
      break;
    case 6: 
      alert ("Sábado");
      break;
    case 7: 
      alert ("Domingo");
      break;  
    default:
      alert ("Número no válido, ingresa un valor entre 1 y 7.");
      break
  }
  
ejercicio 7
let compra = prompt("Ingresa el valor de tu compra: ");

compra = parseInt(compra);

if (compra >= 1000) {

  descuento = 0.2 * compra;
} else {

  descuento = 0.05 * compra;
}

total = compra - descuento;

alert("El total a pagar es de " + total + " pesos.");

ejercicio 8
let horasTrabajadas = prompt("Ingresa las horas trabajadas: ");

horasTrabajadas = parseInt(horasTrabajadas);

if (horasTrabajadas <= 40) {

  salario = horasTrabajadas * 16000;
} else {

  salario = 40 * 16000 + (horasTrabajadas - 40) * 20000;
}

alert("El salario semanal es de " + salario + " pesos.");

ejercicio 9
let nombre1 = prompt("Ingresa el nombre de la primera persona: ");
let edad1 = prompt("Ingresa la edad de la primera persona: ");
let nombre2 = prompt("Ingresa el nombre de la segunda persona: ");
let edad2 = prompt("Ingresa la edad de la segunda persona: ");

edad1 = parseInt(edad1);
edad2 = parseInt(edad2);

if (edad1 > edad2) {

  alert("La persona con más edad es " + nombre1 + " con " + edad1 + " años.");
} else {

  alert("La persona con más edad es " + nombre2 + " con " + edad2 + " años.");
}

ejercicio 10
let precio = prompt("Ingresa el precio de la camisa: ");
let cantidad = prompt("Ingresa la cantidad de camisas compradas: ");

precio = parseInt(precio);

totalSinDescuento = cantidad * precio;

if (cantidad >= 3) {

  descuento = 0.2 * totalSinDescuento;
} else {

  descuento = 0.1 * totalSinDescuento;
}

total = totalSinDescuento - descuento;

alert("El total a pagar es de " + total + " pesos.");


ejercicio 11

let numero1 = prompt("Ingresa el primer número: ");
let numero2 = prompt("Ingresa el segundo número: ");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

if (numero1 == numero2) {

  alert("Los números son iguales y su producto es " + numero1 * numero2);
} else if (numero1 > numero2) {

    alert("El primer número es mayor y su diferencia es " + numero1 - numero2);
} else {

    alert("El segundo número es mayor y su suma es " + numero1 + numero2);
} 

ejercicio 12. Realizar una calculadora con las operaciones bassicas

let opcion = prompt("1. suma 2. resta 3. division 4. multiplcacion");
let nume1 = prompt("digite el numero 1");
let nume2 = prompt("digite el numero 2");

if (opcion==1){
    suma=parseInt(nume1)+parseInt(nume2);
    alert(suma);
} else if(opcion==2){
    resta=parseInt(nume1)-parseInt(nume2);
    alert(resta);
} else if(opcion==3){
    division=parseInt(nume1)/parseInt(nume2);
    alert(division);
} else {
    multiplicacion=parseInt(nume1)*parseInt(nume2);
    alert(multiplicacion);
}
*/


