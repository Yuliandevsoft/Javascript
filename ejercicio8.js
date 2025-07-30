// 8. Conversor de temperatura interactivo

// Permite al usuario convertir temperaturas entre grados Celsius y Fahrenheit. Solicita el tipo de conversión y
// el valor a convertir, y muestra el resultado de forma clara

let tipo = prompt("Digita 'F' para convertir de Fahrenheit a Celsius o 'C' para convertir de Celsius a Fahrenheit");
let temperatura = prompt("Digita la temperatura para la conversión");
temperatura = Number(temperatura);

switch (tipo) {
  case 'F':
    alert('Elegiste convertir de Fahrenheit a Celsius');
    let celsius = (temperatura - 32) * 5/9;
    alert(`El resultado es: ${celsius.toFixed(2)} °C`);
    break;
    
  case 'C':
    alert('Elegiste convertir de Celsius a Fahrenheit');
    let fahrenheit = (temperatura * 9/5) + 32;
    alert(`El resultado es: ${fahrenheit.toFixed(2)} °F`);
    break;
    
  default:
    alert("❌ Elige 'F' o 'C' dependiendo lo que quieras convertir ❌");
}

