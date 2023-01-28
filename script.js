/*Este es un simulador de prestamos, una vez que el usuario ingresa el monto que solicita, se pide que ingrese en cuantas cuotas lo va a querer, 
teniendo para elegir en: 1, 3, 6 o 12 cuotas, cada una con intereses distintos. En consola se le muestra el detalle de monto que solicita
tambien de la cantidad de cuotas que selecciona y en base a esos datos se calcula y se muestra por consola, el interes a pagar y el valor de cada cuota.

Si el usuario ingresa otro numero que no sea los de la cantidad de las cuotas a elegir se 
le mostrara una alerta "Error en cantidad de cuotas, volve a ingresar una cuota valida" dandole oportunidades hasta que elija una de las 
opciones declaradas.*/

alert(" ¡Bienvenid@ a PRESTAMOS EN EL ACTO!");
let monto = parseInt(prompt("Ingresa el monto que vas a solicitar: "));
let cantidadCuotas = parseInt(prompt("En cuantas cuotas elegis pagar: 1 , 3 , 6 o 12 : "));

let cuotaCorrecta = false;

/*mientras cuotaCorrecta sea falsa se ejecuta el alert dando de salida el prompt para que el usuario pueda volver a elegir 
, sino es falsa la condicion, cuotaCorrecta queda como verdadera.*/
while( cuotaCorrecta == false){
    if( cantidadCuotas != 1 && cantidadCuotas != 3 && cantidadCuotas != 6 && cantidadCuotas && 12){
          alert("Error en cantidad de cuotas, volve a ingresar una cuota valida.");
           cantidadCuotas = parseInt(prompt("Elegí en cuantas cuotas elegis pagar: 1 , 3 , 6 o 12 : "));        
    }
          
  else{
    cuotaCorrecta = true;
  }
  }
  
/*La funcion interes calcula el monto del interes a cobrar dependiendo de la cuota elegida. */
function interes(monto, cantidadCuotas) {
  

   if (cantidadCuotas == 1) {
        let interes = monto * 0;
        return interes
    }
    else if (cantidadCuotas == 3) {

        let interes = monto * 0.15;
        return interes
    }
    else if (cantidadCuotas == 6) {

        let interes = monto * 0.30;
        return interes
    }
    else {
        cantidadCuotas == 12

        let interes = monto * 0.70;
        return interes
    }

}


console.log(" Bienvenid@ a PRESTAMOS EN EL ACTO ");

//Calcula el monto final a abonar.
let total = monto + interes(monto, cantidadCuotas);

//Devuelve por consola el monto que solicita el usuario.
console.log("Pediste: $", monto);
//Devuelve por consola la cantidad de cuotas que solicita el usuario.
console.log("Cuotas: ", cantidadCuotas);
//Devuelve por consola el monto final a pagar.
console.log("Total con interes: $", total);
console.log("Pagas cuotas de: $", total / cantidadCuotas);


