
/********* EJERCICIO 27 *********/


let numero1 = 3;

let numero2 = 2;

console.log("La suma de 3 + 2 es:", numero1 + numero2);

console.log("La resta de 3 - 2 es:", numero1 - numero2);

console.log("La multiplicación de 3 * 2 es:", numero1 * numero2);

console.log("La división de 3 / 2 es:", numero1 / numero2);

console.log("El resto de 3 / 2 es:", numero1 % numero2);



/********* EJERCICIO 28 *********/


let numero = 9;

console.log("La tabla del 9:" + " " + numero * 1, numero * 2, numero * 3, numero * 4, numero * 5, numero * 6, numero * 7, numero * 8, numero * 9, numero * 10);



/********* EJERCICIO 29 *********/


let ladoCuadrado = 10;

console.log("El perímetro del cuadrdo es:" + " " + ladoCuadrado * 4);



/********* EJERCICIO 30 *********/


let lado = 5;

console.log("El área de un cuadrado es:" + " " + lado * 2);



/********* EJERCICIO 31 *********/


let lado1 = 10;

let lado2 = 20;

let lado3 = 5;

console.log("El perímetro del triángulo es:" + " " + lado1 + lado2 + lado3);



/********* EJERCICIO 32 *********/


let altura = 10;

let base = 4;

console.log("El perímetro es:" + " " + altura + base + " " + "y el área es:" + " " + altura * base);



/********* EJERCICIO 33 *********/


let cantidadDePersonas = 100;

cantidadDePersonas += 5;

console.log("Cantidad de personas:" + " " + cantidadDePersonas);

cantidadDePersonas -= 3;

console.log("Cantidad de personas:" + " " + cantidadDePersonas);

cantidadDePersonas *= 2;

console.log("Cantidad de personas:" + " " + cantidadDePersonas);



/********* EJERCICIO 34 *********/


let ingresos = 1000;

let ganancias = 600;

let impuestos = 500;

console.log("Objetivo de ingresos: true o false", ingresos >= 800);

console.log("Objetivo de impuestos:", impuestos <= 400);

console.log("Bono de ganancias:", ganancias == 600);



/********* EJERCICIO 35 *********/


let numeroDeCliente = 143245;

let numeroDeClienteIngresado = "143245";

console.log("El número ingresado por el cliente es correcto:", numeroDeCliente == numeroDeClienteIngresado);

console.log("El cliente ingresó un número de cliente válido:", numeroDeCliente === numeroDeClienteIngresado);



/********* EJERCICIO 36 *********/

let numeroUno = 10;

let numeroDos = 20;

console.log("Las variables numero1 y numero2 tienen el mismo valor:", numero1 != numero2);

console.log("Las variables numero1 y numero2 son distintas:", numero1 !== numero2);



/********* EJERCICIO 37 *********/


let promedioParaAprobar = 6;

let promedioDelAalumno = 4;

console.log("El alumno tiene un promedio mayor o igual al requerido:", promedioDelAalumno >= promedioParaAprobar);

console.log("Al alumno le faltaron", (promedioParaAprobar - promedioDelAalumno), "para aprobar");