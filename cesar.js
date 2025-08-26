function cifradoCesar(texto, desplazamiento) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];

    if (/[a-zA-Z]/.test(char)) {
      let base = char === char.toUpperCase() ? 65 : 97;
      let codigo = texto.charCodeAt(i);

      resultado += String.fromCharCode(((codigo - base + desplazamiento) % 26 + 26) % 26 + base);
    } else {
      resultado += char; // Deja espacios y símbolos sin cambiar
    }
  }
  return resultado;
}

// Ejemplo de uso
let mensaje = "HOLA MUNDO";
let clave = 3;

let cifrado = cifradoCesar(mensaje, clave);
let descifrado = cifradoCesar(cifrado, -clave);

console.log("Mensaje original:", mensaje);
console.log("Cifrado:", cifrado);
console.log("Descifrado:", descifrado);
