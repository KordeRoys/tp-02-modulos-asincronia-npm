/*main
 ├─ espera leerJson
 ├─ ejecuta crearInforme
 └─ espera escribirTexto
 */ 

const path = require("node:path"); 
const pc = require("picocolors");
const {leerJson, escribirTexto} = require("./archivos.js");
const {crearReporte} = require("./juegos.js");

                         // Parametros  //Argumentos
const rutaDatos = path.join(__dirname, "..", "datos", "juegos.json");

const rutaSalida = path.join(__dirname, "..", "salida", "catalogo-juegos.txt");

async function main() {
    try {
        const juegosMesa = await leerJson(rutaDatos); //await hace que la funcion espere a que se resuelva la promesa de la funcion leerJson, antes de continuar con la ejecucion
        const reporte = crearReporte(juegosMesa);
        await escribirTexto(rutaSalida, reporte);
        console.log(pc.green("Reporte generado con exito en:", rutaSalida));
    } catch (error) {
        console.error(pc.red("Error en la ejecucion del programa:", error));
        process.exitCode = 1; // Establece el código de salida del proceso a 1 para indicar un error
    }
}

main();
console.log(pc.blue("Programa finalizado")); 