// trabajando con objetos (practica)

// creo un objeto de estudiante
let estudiante = {
  nombre: 'Rocio',
  edad: 36,
  nacionalidad: 'Salvadoreña',
  materias: ['Programación', 'Base de datos', 'Diseño'],
  activo: true,

  // metodo dentro del objeto
  saludar: function() {
    console.log('Hola, soy', this.nombre);
  }
};


// mostrar todo el objeto
console.log(estudiante);


// acceder a propiedades
console.log('Nombre:', estudiante.nombre);
console.log('Edad:', estudiante.edad);


// otra forma de acceder
console.log('Nacionalidad:', estudiante['nacionalidad']);


// modificar un valor
estudiante.edad = 37;
console.log('Edad actualizada:', estudiante.edad);


// agregar nueva propiedad
estudiante.correo = 'rocio@gmail.com';
console.log(estudiante);


// eliminar propiedad
delete estudiante.activo;
console.log(estudiante);


// usar el metodo
estudiante.saludar();


// recorrer el objeto
for (let clave in estudiante) {
  console.log(clave + ':', estudiante[clave]);
}


// ejemplo mas real
let producto = {
  nombre: 'Laptop',
  precio: 800,
  disponible: true,

  mostrar: function() {
    console.log('Producto:', this.nombre);
    console.log('Precio:', this.precio);
  }
};

producto.mostrar();

