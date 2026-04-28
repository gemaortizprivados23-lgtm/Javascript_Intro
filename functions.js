
//  Ejemplo 1: Función básica
function saludar() {
  // Muestra un saludo simple
  console.log('Hola, bienvenida Rocio');
}

saludar(); 
// Llamo a la función


// Ejemplo 2: Función con parámetro
function saludarNombre(nombre) {
  // Recibe un nombre
  console.log('Hola', nombre);
}

saludarNombre('Rocio'); 
// Envío el nombre como argumento


// Ejemplo 3: Función con return
function sumar(a, b) {
  // Suma dos números
  return a + b;
}

let resultado = sumar(5, 3); 
console.log('Resultado de la suma:', resultado);


// Ejemplo 4: Función con condicional
function evaluar(nota) {
  if (nota >= 6) {
    return 'Aprobado';
  } else {
    return 'Reprobado';
  }
}

console.log('Evaluación:', evaluar(7));


//  Ejemplo 5: Función con loop
function tabla(numero) {
  console.log('Tabla del', numero);
  for (let i = 1; i <= 5; i++) {
    console.log(numero + ' x ' + i + ' = ' + (numero * i));
  }
}

tabla(3);


// Ejemplo 6: Función flecha
const multiplicar = (a, b) => {
  return a * b;
};

console.log('Multiplicación:', multiplicar(4, 6));

function aprobado(nota) {

  if (nota >= 7) {
    return "Si aprueba";
  } else {
    return "No aprueba";
  }

}

// probando
console.log(aprobado(7));
console.log(aprobado(5));