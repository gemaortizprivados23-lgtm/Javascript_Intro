// metodos de arreglos (probando en clase)

let numeros = [1, 2, 3, 4, 5];
let nombres = ['Rocio', 'Ana', 'Luis'];


// push -> agrega al final
numeros.push(6);
console.log('push:', numeros);


// pop -> elimina el ultimo
numeros.pop();
console.log('pop:', numeros);


// unshift -> agrega al inicio
numeros.unshift(0);
console.log('unshift:', numeros);


// shift -> elimina el primero
numeros.shift();
console.log('shift:', numeros);


// includes -> verifica si existe
console.log('incluye 3?', numeros.includes(3));


// indexOf -> devuelve posicion
console.log('posicion de 4:', numeros.indexOf(4));


// join -> une en string
console.log('join:', nombres.join(' - '));


// slice -> copia una parte
let copia = numeros.slice(1, 3);
console.log('slice:', copia);


// splice -> elimina o agrega en medio
numeros.splice(2, 1); 
// elimina 1 elemento desde posicion 2
console.log('splice eliminar:', numeros);

numeros.splice(2, 0, 99); 
// agrega 99 en posicion 2
console.log('splice agregar:', numeros);


// forEach -> recorrer
nombres.forEach(function(n) {
  console.log('nombre:', n);
});


// map -> crea nuevo arreglo
let dobles = numeros.map(function(n) {
  return n * 2;
});
console.log('map:', dobles);


// filter -> filtra
let mayores = numeros.filter(function(n) {
  return n > 2;
});
console.log('filter:', mayores);


// find -> busca uno
let encontrado = numeros.find(function(n) {
  return n > 3;
});
console.log('find:', encontrado);


// some -> alguno cumple
console.log('hay mayores a 4?', numeros.some(n => n > 4));


// every -> todos cumplen
console.log('todos > 0?', numeros.every(n => n > 0));


