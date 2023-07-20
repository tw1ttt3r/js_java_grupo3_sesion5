class Persona {
  
  // es el primero metodo en ser ejecutado
  // puede o no recibir parametros
  constructor(edad, altura, nombre, curp, nacionalidad) {
    this.edad = edad;
    this.altura = altura;
    this.nombre = nombre;
    this.curp = curp;
    this.nacionalidad = nacionalidad;
  }

  // puede o no recibir parametros
  presentarse() {
    console.log("Hola mi nombre es: ", this.nombre);
  }

  identificate() {
    return this.curp;
  }

  sumar(numero1, numero2) {
    return numero1 + numero2;
  }


}