class Calculadora {
  
  constructor(modelo, marca) {
    this.modelo = modelo;
    this.marca = marca;
  }

  menu() {
    const opcion = prompt(`Operaciones disponibles:
    1) suma
    2) resta
    3) multiplicacion
    4) division
    
    *Solo puedes hacer operaciones con 2 números
    
    Operacion: `);

    const num1 = prompt("Primer numero: ")
    const num2 = prompt("Segundo numero: ")

    switch(Number(opcion)){
      case 1:
        this.suma(Number(num1), Number(num2));
        break;
      case 2:
        this.resta(Number(num1), Number(num2));
        break;
      case 3:
        this.multiplicacion(Number(num1), Number(num2));
        break;
      case 4:
        this.division(Number(num1), Number(num2));
        break;
    }
  }

  suma(num1, num2) {
    console.log(`El resultado es: ${num1+num2}`)
  }

  resta(num1, num2) {
    console.log(`El resultado es: ${num1-num2}`)
  }

  multiplicacion(num1, num2) {
    console.log(`El resultado es: ${num1*num2}`)
  }

  division(num1, num2) {
    console.log(`El resultado es: ${num1/num2}`)
  }

  info() {
    console.log(`${this.marca} model: ${this.modelo}`)
  }
}