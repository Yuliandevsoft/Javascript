// 6. Determinar si un año es bisiesto

// Escribe un programa que reciba un número de año e indique si ese año es bisiesto o no, según las reglas
// del calendario gregoriano.

let year = parseInt(prompt("Digite el año para saber si es bisiesto"));

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 !== 0)) {
    console.log(`El año ${year} es bisiesto.`);
} else {
    console.log(`El año ${year} no es bisiesto.`);
}

  

