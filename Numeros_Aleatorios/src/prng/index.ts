import crypto from "crypto"; //importa el modulo crypto de node.js para generar numeros aleatorios


// Define un tipo que puede ser "bytes", "int" o "uuid"

type PRNG = "bytes" | "int" | "uuid";

const prng = (
  type: PRNG,
  size: number,
  min: number,
  max: number,
  encoding: BufferEncoding://tipo de codificacion del resultado teneiendo en cuenta que bytes es un buffer
) => {//funcion que genera valores aleatorios segun el tipo solicitado
  switch (type) {//segun el tipo de dato que se solicite
    case "bytes":
      return crypto.randomBytes(size).toString(encoding);//genera un buffer de bytes aleatorios y lo convierte a la codificacion solicitada por eso el uso de toString
    case "int":
      return crypto.randomInt(min, max);//genera un numero entero aleatorio entre min y max
    case "uuid":
      return crypto.randomUUID();//genera un uuid aleatorio
    default:
      throw new Error("Tipo no soportado");//si el tipo no es ninguno de los anteriores lanza un error
  }
};

export default prng;
