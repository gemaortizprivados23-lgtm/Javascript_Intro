let nombre = 'Rocio';
let nacionalidad = 'Salvadoreña';

// Concatenación
console.log('Bienvenida ' + nombre + ' de nacionalidad ' + nacionalidad); // Forma 1

console.log('Bienvenida', nombre, 'de nacionalidad', nacionalidad); // Forma 2

console.log(`Bienvenida ${nombre} de nacionalidad ${nacionalidad}`); // Forma 3 (recomendada)

// Length
console.log(`La variable tiene: ${nombre.length} caracteres`); 
// Cuenta la cantidad de letras del nombre

// toUpperCase
console.log(nombre.toUpperCase()); 
// Convierte todo el nombre a MAYÚSCULAS

// toLowerCase
console.log(nombre.toLowerCase()); 
// Convierte todo el nombre a minúsculas