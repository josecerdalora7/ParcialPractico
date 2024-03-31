function sumarCuadros(arrayNumeros) {
  let sumaTotal = 0;

  for (let i = 0; i < arrayNumeros.length; i++) {
    const numero = arrayNumeros[i];
    sumaTotal += numero;

    console.log("+ " + "-".repeat(numero.toString().length) + " +");
    console.log("| " + numero + " |");
    console.log("+ " + "-".repeat(numero.toString().length) + " +");
  }

  const longitudSumaTotal = sumaTotal.toString().length;
  console.log("+ " + "=".repeat(longitudSumaTotal) + " +");
  console.log("| " + sumaTotal + " |");
  console.log("+ " + "=".repeat(longitudSumaTotal) + " +");
}

// Ejemplo de uso
const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
sumarCuadros(arrayNumeros);