import yargs from "yargs";
import prng from "./prng";


// Se definen opciones constantes para seleccionar la codificación y gestión de archivos
const encoding = {//resultado de salida en diferentes formatos 
  alias: "enc",
  choices: [// Lista de codificaciones soportadas
    "ascii",
    "utf8",
    "utf-8",
    "utf16le",
    "utf-16le",
    "ucs2",
    "ucs-2",
    "base64",
    "base64url",
    "latin1",
    "binary",
    "hex",
  ] as const,// Tipo constante para las opciones de codificación
  default: "hex",
} as const;


// Se define el objeto yargs y configura los comandos disponibles
const { argv } = yargs
  .options({})
   // Se genera el comando para generar un número aleatorio
  .command({
    command: "prng",
    describe: "Generar un numero aleatrio",
    handler: ({ type, size, min, max, encoding }) => {// Función que maneja la lógica del comando. y recibe parametros indexx.ts de la carpeta prng
      console.log(prng(type, size, min, max, encoding));
    },
    builder: {// Configuración de las opciones del comando
      type: {
        choices: ["bytes", "int", "uuid"] as const,
        description: "",
        demandOption: true,
      },
      size: {
        alias: "s",
        description: "Tamaño de la aleatoried",
        default: 16,// Valor por defecto suficiente para la mayoría de los casos
        type: "number",
      },
      encoding, // Uso de la opción de codificación definida anteriormente
      // Opciones específicas para el tipo 'int'
      // Se definen los valores mínimos y máximos para el rango del número aleatorio
      // Solo aplican si el tipo seleccionado es 'int'
      implies: { type: "int"
      },
      min: {
        type: "number",
        default: 0,// Valor por defecto para el mínimo
      },
      max: {
        type: "number",
        default: 100,// Valor por defecto para el máximo entonces esto va a ser un numero entre 0 y 100
      },
    },
  })