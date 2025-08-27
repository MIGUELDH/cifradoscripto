function cifradoCesar(texto, desplazamiento) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];

    if (/[a-zA-Z]/.test(char)) {//test comprueba si el caracter es una letra
      let base = char === char.toUpperCase() ? 65 : 97;//diferenciamos entre mayusculas y minusculas
      let codigo = texto.charCodeAt(i);//obtenemos el codigo ASCII del caracter

      resultado += String.fromCharCode(((codigo - base + desplazamiento) % 26 + 26) % 26 + base);
    } else {
      resultado += char; // Deja espacios y símbolos sin cambiar
    }
  }
  return resultado;
}

// Capturar mensaje desde consola
process.stdin.on("data", function(data) {
  let mensaje = data.toString().trim();
  let clave = 3;

  let cifrado = cifradoCesar(mensaje, clave);
  let descifrado = cifradoCesar(cifrado, -clave);

  console.log("Mensaje original:", mensaje);
  console.log("Cifrado:", cifrado);
  console.log("Descifrado:", descifrado);

  process.exit(); // <- cerramos la app después de imprimir
});
