const { generarNumeroAleatorio, verificarAdivinanza } = require("./funciones");
const readlineSync = require("readline-sync");

const solicitarNumero = () => {
  let numeroIngresado = readlineSync.question("Ingrese un número: ");
  return numeroIngresado;
};

const adivinanza = () => {
  console.log("Bienvenido al juego!!!");
  console.log("Por favor intente adivinar un número del 1 al 100.");
  const ramdom = generarNumeroAleatorio();
  let numeroIngresado = 0;

  while (ramdom != numeroIngresado) {
    numeroIngresado = solicitarNumero();
    verificarAdivinanza(ramdom, numeroIngresado);
  }
};

adivinanza();
