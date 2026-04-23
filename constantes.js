// CONSTANTES EN JAVASCRIPT (const)

// Una constante es un valor que NO se puede cambiar después de declararse

// Declaramos una constante
const nombre = "Rocio";

// Imprimimos su valor en consola
console.log(nombre);

// ❌ Esto daría error porque una constante no se puede reasignar
// nombre = "Maria";


// Ejemplo con número
const edad = 36;
console.log(edad);


// IMPORTANTE:
// Con arreglos u objetos, sí se pueden modificar sus datos internos

const frutas = ["manzana", "pera"];
frutas.push("uva"); // agregamos un elemento

console.log(frutas);


// Con objetos
const estudiante = {
    nombre: "Ana",
    nota: 7
};

// Modificamos una propiedad
estudiante.nota = 9;

console.log(estudiante);


// RESUMEN:
// - const = valor fijo
// - no se puede reasignar
// - sí se pueden modificar datos internos (arrays y objetos)