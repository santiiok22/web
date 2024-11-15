function esParOImpar(numero) {
    return numero % 2 === 0 ? "par" : "impar";
}

let numero = parseInt(prompt("Ingrese un número entero:"));
console.log("El número es " + esParOImpar(numero));
