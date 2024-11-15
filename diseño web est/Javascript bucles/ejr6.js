function calcularPrecioFinal(precioTotal) {
    return precioTotal * 0.85;
}

// Ejemplo de uso
let totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));
let precioFinal = calcularPrecioFinal(totalCompra);
console.log("El precio final con descuento es: " + precioFinal);

