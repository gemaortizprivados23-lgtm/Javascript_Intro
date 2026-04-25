// Ejercicio: Mostrar la tabla de multiplicar si el número es válido

let numero = 5; 
// Número base

// Condicional
if (numero > 0) { 
  // Verifico que el número sea positivo

  console.log('Tabla con FOR');
  // FOR
  for (let i = 1; i <= 5; i++) { 
    // Recorre del 1 al 5
    console.log(numero + ' x ' + i + ' = ' + (numero * i));
  }

  console.log('Tabla con WHILE');
  // WHILE
  let j = 1; 
  // Inicializo contador
  while (j <= 5) { 
    console.log(numero + ' x ' + j + ' = ' + (numero * j));
    j++; 
    // Incremento
  }

  console.log('Tabla con DO WHILE');
  // DO WHILE
  let k = 1; 
  do {
    console.log(numero + ' x ' + k + ' = ' + (numero * k));
    k++; 
  } while (k <= 5);

} else {
  // Si el número no es válido
  console.log('El número debe ser mayor que 0');
}