// Estructuras datos

// Objetos: son estructuras de datos que tienen la caracteristica de definir
// los datos que contienen a partir de propiedades con un formato de strings
// cada propiedad es separada por una coma

// Propiedades
// son creadas con un nombre y pueden almacenar cualquier tipo de datos válido de JS
// El nombre de las propiedades son únicas en el objeto

// Sintaxis: {}

const pedro = {};

const maria = {
  "nombre": "Maria",
  "edad": 35,
  "casada": true,
  "noCuenta": null,
  apellidos: "Flores Magon",
  apellidos: "Hernandez",
  presente: function() {
    console.log("Hola me llamo: ", this.nombre)
  }
};


// obtener valores del objeto
// sintaxis: objeto.nombrepropiedad
// sintaxis: objeto["nombredelapropiedad"]
// sintaxis: propiedad dinamicas objeto[variable] nombre de la propiedad a buscar

// asignación de valores a propiedades
// sintaxis: objeto[nombredelapropiedad] = nuevovalor

// agregar nuevas propiedades
// sintaxis: objeto[nombredelanuevapropiedad] = valor

// recorrer un objeto
// for (let propiedad in objeto) {}

// metodos especiales
// me va a regresar un arreglo de datos
// Object
// values
// sintaxis: Object.values(objeto)

// entries: me regresa un arreglo de arreglos
// sintaxis: Object.entries(objeto)
// estructura: [key, value]

// metodos
// son creados con un nombre y pueden almacenar solo un tipo de dato function
// El nombre de las metodos son únicas en el objeto
// sintaxis: nombremetodo: function() {}

// funcion anonima: una funcion normal pero al ser declarada no se le asigna un nombre


// POO Programación Orientada a Objetos

// Clases: Son modelos que contiene propiedades y metodos
// Objetos: Son representaciones de las clases

// Para que un objeto surja de una clase se requerie un proceso llamado instancia

// operador llamado new

// Pilares de la POO

// abstracción
// es el proceso de analizar y obtener las principales propiedades y acciones de algo de la vida real

// automovil
// propiedades 
// color, numero de llantas, marca, modelo, cilindros, transmision, precio, tamaño, traccion
// acciones - metodos de la clase
// encender, apagar, acelerar, frenar, tocar el claxon, estacionarse

// encapsulamiento
// es la capacidad de contener toda la funcionalidad y solo poder ser ejecutada o consumida por el objeto


// herencia
// es un proceso en el cual voy a poder transferir propiedades y metodos de una clase a otra


// polimorfismo
// es la capacidad de ejecutar de diversas maneras un acción

//  funciones constructoras
// function Persona(nombre, edad, profesion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.profesion = profesion;
// }

// Persona.prototype.gastar = function() {
//   console.log("gastando ahorros")
// }

// const Maria = new Alumno("Maria", 15, "C", 6, 1.70,  "sbchjjdklsaucjksdc", "Mexicana")
