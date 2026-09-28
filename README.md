# Trabajo práctico 02
## Descripción: Este programa crea un archivo de texto de un catalogo de juegos de mesa alamcenados en un JSon, en el que muestra su disponibilidad en el catalogo

## Instalación: Una vez descargado el archivo en la direccion de carpeta señalada en la terminal descargar las librerias con npm install

## Ejecución: Luego se ejecutar el programa con npm start

## Estructura del proyecto: El proyecto se compone de una carpeta src(source) que contiene el archivo index donde se ejecuta el programa, el archivo juegos que transforma los datos del dominio(json) y devuelve el informe completo como texto y el archivo que exporta el modulo que contiene las funciones que leen el JSON y escriben el texto

## Flujo asíncrono: ME FALTA ESTUDIAR BIEN LA COORDINACION DE LA ASINCRONIA AL EJECUATARSE UN CODIGO O FUNCION

## Dependencias: Las dependencias usadas en este proyecto son: picocolors, node:path y node:fs/promises

# 1. ¿Qué responsabilidad tiene cada módulo?: De traer las funcionalidades como 

# path: que sirve para manejar y transformar rutas de archivos y directorios de forma segura entre distintos sistemas operativos
# fs: que permite leer, escribir, modificar y eliminar archivos y carpetas en tu computadora
# picocolor: modificar los colores de los mensajes por la terminal

# 2. ¿Qué diferencia existe entre exportar una función y ejecutarla?: Exportar sirve para que otro archivo distinto pueda usar la funcion estando declarada en la carpeta del origen, sin tener que volver a escribir la funcion de nuevo.

# 3. ¿Qué representa la promesa devuelta por fs.readFile ?: Representa la lectura de la ruta hasta juegos.js y guarda el archivo

# 4. ¿Por qué await se utiliza dentro de una función async ?: await hace que la funcion espere a que se resuelva la promesa antes de continuar con la ejecucion

# 5. ¿Qué errores pueden llegar al catch de main ?: Errores de ejecucion de programa

# 6. ¿Por qué se publican package.json y package-lock.json , pero no node_modules ?: Los modulos no son publicados en GitHub por que son archivos que ocupan mucho espacio y no tienen necesidad de ser subidos ya que se decargan por cualquier usuario en cada proyecto que se los utilice 
 
 # package.json
# Define metadatos del proyecto: nombre, versión, descripción
# Lista las dependencias que necesita el proyecto
# Define scripts para ejecutar comandos (como npm start)
# Es editado manualmente por el desarrollador
# Es versionado en Git (se sube al repositorio)

 # package-lock.json
# Archivo de bloqueo que asegura consistencia de versiones
# Se genera automáticamente al instalar dependencias (npm install)
# Registra las versiones exactas de todos los paquetes instalados
# Asegura que cualquiera que clone el proyecto tenga las mismas versiones
# Es versionado en Git
# NO se edita manualmente

# 7. ¿Para qué se utiliza picocolors y por qué figura en dependencies ?: Se utiliza para modificar los colores de los mensajes por la terminal y se escribe en dependencias para ser usado ya que es un módulo externo que no viene por defecto en Node.js