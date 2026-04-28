// guia de arrays (practica personal)

// creo un arreglo con algunos nombres
let nombres = ['Rocio', 'Ana', 'Luis'];

console.log(nombres); // muestro todo


// acceso a posiciones
console.log(nombres[0]); // primer elemento
console.log(nombres[2]); // tercero


// cambio un valor
nombres[1] = 'Maria'; // cambio Ana por Maria
console.log(nombres);


// agrego un nombre al final
nombres.push('Carlos');
console.log(nombres);


// elimino el ultimo
nombres.pop();
console.log(nombres);


// recorrer con for
for (let i = 0; i < nombres.length; i++) {
  console.log('Nombre:', nombres[i]);
}


// otra forma de recorrer
nombres.forEach(function(n) {
  console.log('->', n);
});


// verificar si existe un nombre
console.log('¿Está Rocio?', nombres.includes('Rocio'));


// cantidad de elementos
console.log('Total:', nombres.length);



// ===== ejercicios =====

// 1. crear un arreglo con frutas
let frutas = ['manzana', 'pera', 'uva', 'mango', 'piña'];
console.log(frutas);

// 2. mostrar primero y ultimo
console.log('primero:', frutas[0]);
console.log('ultimo:', frutas[frutas.length - 1]);

// 3. agregar y eliminar
frutas.push('sandia');
console.log(frutas);

frutas.pop();
console.log(frutas);

// 4. recorrer y ver si son palabras largas
for (let i = 0; i < frutas.length; i++) {
  if (frutas[i].length > 5) {
    console.log(frutas[i], 'es larga');
  } else {
    console.log(frutas[i], 'es corta');
  }
}


