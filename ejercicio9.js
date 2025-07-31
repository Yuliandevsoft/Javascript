// 9. Contar vocales en una oración

// Pide al usuario una oración y cuenta cuántas vocales contiene. Asegúrate de considerar tanto vocales
// mayúsculas como minúsculas.

function contarVocales() {
    let oracion = prompt("Escribe una oración para contar cuántas vocales tiene:");
    let contador = 0;
    for (let letra of oracion.toLowerCase()) {
        if ("aeiou".includes(letra)) {
            contador++;
        }
    }

    alert(`La oración tiene ${contador} vocales.`);
}

contarVocales();