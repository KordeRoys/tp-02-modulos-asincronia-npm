// Este módulo debe transformar los datos del dominio y devolver el informe completo como texto.
 

function formatearJuegoDeMesa(juegoDeMesa, posicion) {
    const disponibilidad = juegoDeMesa.disponible 
    ? "Está disponible" : "No está disponible";

    // posicion captura
    return `${posicion + 1}. ${juegoDeMesa.titulo}.
    Editorial y año : ${juegoDeMesa.editorial.join(", ")}, ${juegoDeMesa.anio}.
    Participantes: ${juegoDeMesa.jugadoresMin} a ${juegoDeMesa.jugadoresMax}.
    Categorías: ${juegoDeMesa.categorias.join(", ")}.
    Estado: ${disponibilidad}.
    `; 
} //En el archivo JSON, editorial es un string, no un array. El método .join() solo funciona con arrays. Por ende vamos a cambiar por un array en juegos.json
 
 /* 
 CATÁLOGO DE JUEGOS DE MESA
==========================
Cantidad de juegos: 4
1. ...
 Editorial y año: ...
 Participantes: ...
 Categorías: ...
 Estado: ...

 */

 function crearReporte(juegosDeMesa) {
    const juegos = juegosDeMesa.map(formatearJuegoDeMesa);
    return `CATÁLOGO DE JUEGOS DE MESA
    ==========================
    Cantidad de juegos: ${juegosDeMesa.length}

    ${juegos.join("\n")}

    `;

 }

 module.exports = {
    crearReporte, //crearReporte contiene la funcion formatearJuegoDeMesa y la funcion crearReporte que devuelve el informe completo como texto
 }