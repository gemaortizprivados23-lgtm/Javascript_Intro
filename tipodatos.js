// ==============================
// EJERCICIO COMPLETO JS
// Tipos de datos + uso práctico
// ==============================

// 1. STRING
let nombre = "Rocío";
console.log("Nombre:", nombre);

// 2. NUMBER
let edad = 36;
let altura = 1.65;
console.log("Edad:", edad);
console.log("Altura:", altura);

// 3. BOOLEAN
let esDocente = true;
console.log("¿Es docente?", esDocente);

// 4. UNDEFINED
let sinValor;
console.log("Variable sin valor:", sinValor);

// 5. NULL
let valorNulo = null;
console.log("Valor nulo:", valorNulo);

// 6. ARRAY (Lista)
let colores = ["rojo", "azul", "verde"];
console.log("Colores:", colores);

// 7. OBJECT (Objeto)
let persona = {
    nombre: "Rocío",
    edad: 36,
    profesion: "Docente"
};
console.log("Objeto persona:", persona);

// 8. FUNCTION (Función)
function saludar() {
    return "Hola, bienvenido a JavaScript";
}
console.log("Función:", saludar());

// 9. SYMBOL
let simbolo = Symbol("id");
console.log("Symbol:", simbolo);

// 10. BIGINT
let numeroGrande = 1234567890123456789012345678901234567890n;
console.log("BigInt:", numeroGrande);

// ==============================
// USO COMBINADO (LÓGICA SIMPLE)
// ==============================

if (esDocente) {
    console.log(nombre + " es docente y tiene " + edad + " años.");
} else {
    console.log(nombre + " no es docente.");
}

// Acceso a array
console.log("Primer color:", colores[0]);

// Acceso a objeto
console.log("Profesión:", persona.profesion);

// 11. DATE (Fecha y hora)
let fecha = new Date();

// Mostrar fecha completa
console.log("Fecha completa:", fecha);

// Mostrar solo la fecha legible
console.log("Fecha legible:", fecha.toDateString());

// Mostrar solo la hora
console.log("Hora:", fecha.toTimeString());

// Obtener partes específicas
console.log("Año:", fecha.getFullYear());
console.log("Mes:", fecha.getMonth() + 1); // (0-11, por eso +1)
console.log("Día:", fecha.getDate());

// 12. DATE con formato regional (El Salvador)
let fechaSV = new Date();

console.log("Fecha en formato El Salvador:");

console.log(
  fechaSV.toLocaleDateString('es-SV', {
    timeZone: 'America/El_Salvador',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
);