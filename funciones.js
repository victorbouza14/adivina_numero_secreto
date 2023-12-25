const generarNumeroAleatorio = () => {
   let ramdom = Math.floor(Math.random() * 100) + 1;
   return ramdom;
};

const verificarAdivinanza = (ramdom, numeroIngresado) => {
  if (ramdom == numeroIngresado) {
    console.log("Felicidades!!! adivinaste el numero secreto.");
  } else if (numeroIngresado > ramdom) {
    console.log(
      "Por favor ingrese de nuevo otro número, el número que ingresó es mayor!"
    );
  } else if (numeroIngresado < ramdom) {
    console.log(
      "Por favor ingrese de nuevo otro número, el número que ingresó es menor!"
    );
  }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};