// 5. Promedio de calificaciones con retroalimentación

// Solicita tres calificaciones y calcula su promedio. Según el resultado, muestra un mensaje que indique si la
// persona aprobó o reprobó, y añade un calificativo como 'Excelente', 'Aprobado' o 'Reprobado'.

let nota1 = parseFloat(prompt("Por favor, ingresa tu primera calificacion"));
let nota2 = parseFloat(prompt("Por favor, ingresa tu segunda calificacion"));
let nota3 = parseFloat(prompt("Por favor, ingresa tu tercera calificacion"));

calificaciones = () => {
       let suma = nota1 + nota2 + nota3;
       let promedio = suma /3;

       if( promedio >= 90 && promedio <=100  ){
        console.log(`Promedio Excelente: ${promedio.toFixed(2)} `)

       } else if(promedio >= 80 && promedio <= 89){
          console.log(`Promedio Bueno: ${promedio.toFixed(2)} `)

       }else if(promedio >=70 && promedio <= 79){
          console.log(`Aprobado: ${promedio.toFixed(2)} `)

       }else{
        console.log(`Reprobado promedio: ${promedio.toFixed(2)}`)
       }
}
calificaciones();


//90- 100 excelente
//80-89 Bueno
//70 - 79 aprobado
// 69 reprobado