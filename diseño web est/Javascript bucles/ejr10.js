function operarNumeros(num1, num2) {
    if (num1 === num2) {
        return num1 * num2;
    } else if (num1 > num2) {
        return num1 - num2;
    } else {
        return num1 + num2;
    }
}

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
console.log("El resultado es: " + operarNumeros(num1, num2));
