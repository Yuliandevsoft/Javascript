// 10. Verificar si una palabra es palíndromo

// Escribe un programa que determine si una palabra o frase se lee igual al derecho y al revés. Ignora
// espacios, mayúsculas, tildes y signos de puntuación

function esPalindromo() {
  let texto = prompt("Escribe una palabra o frase:");

  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

  let palindromo = texto === [...texto].reverse().join("");

  alert(palindromo ? "✅ Es un palíndromo" : "❌ No es un palíndromo");
}

esPalindromo();
