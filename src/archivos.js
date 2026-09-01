/* Archivos: Este codigo exporta el modulo que contiene las funciones que leen el JSON y escriben el texto
 en la direccion de la ruta y con el archivo asignado*/

 const fs = require("node:fs/promises");
 const path = require("node:path");
 
 //Una promesa (Promise) en JavaScript es un objeto que representa el resultado futuro de una operación asíncrona, como una petición a una API o la lectura de un archivo.
 //async hace que la funcion sea asincrona y pueda esperar a que se resuelvan las promesas de las funciones que se llaman dentro de ella. await hace que la funcion espere a que se resuelva la promesa de la funcion que se llama antes de continuar con la ejecucion del codigo.
 async function leerJson(ruta) {
   try {
      //Cuerpo de la funcion, que debe estar dentro del try y catch en caso de captar algun error nos da el mensaje estipulado
     const texto = await fs.readFile(ruta, "utf8"); //fsreadFile lee el archivo de la ruta especificada y devuelve una promesa que se resuelve con el contenido del archivo en formato de texto (utf8)
     return JSON.parse(texto); //JSON.parse convierte el texto en un objeto de JS

   } catch (error) {
     console.error("Error al leer el archivo JSON:", error);
     throw error;
   }
 }

 async function escribirTexto(ruta, contenido) { //ruta es la ruta del archivo y contenido es el contenido que se va a escribir en el archivo
   try {
    const carpeta = path.dirname(ruta); //dirname obtiene la ruta del directorio
     await fs.mkdir(carpeta, { recursive: true }); //dirname obtiene la ruta del directorio y recursive: true crea los directorios si no existen y puede crear varios directorios a la vez 
     await fs.writeFile(ruta, contenido, "utf8"); //writeFile escribe lo que contiene la variable contenido en el archivo de la ruta especificada. (ruta es la ruta del archivo, contenido es el contenido que se va a escribir en el archivo, utf8 es el formato de codificacion del archivo)

   } catch (error) {
     console.error("Error al escribir el archivo:", error);
     throw error;
   }
 }

 //una vez se tengan las funciones se exportan
 
 module.exports = {
    leerJson,
    escribirTexto,
 };