def cifrado_cesar(texto, desplazamiento):  #Función para cifrar o descifrar usando el cifrado César
    resultado = ""
#declaramos  la funcion en donde resivvvimos texto y el desplazamiento y sera almacenada en una variable resultado
    for char in texto:
        # Solo cifrar letras
        if char.isalpha():
            # Determinar si es mayúscula o minúscula
            base = ord('A') if char.isupper() else ord('a')
            # Aplicar desplazamiento y volver a convertir a caracter
            resultado += chr((ord(char) - base + desplazamiento) % 26 + base)
        else:
            # Dejar espacios, números o símbolos sin cambio
            resultado += char

    return resultado


# Ejemplo de uso
if __name__ == "__main__":
    mensaje = "HOLA Migueldh"
    clave = 3

    cifrado = cifrado_cesar(mensaje, clave)
    descifrado = cifrado_cesar(cifrado, -clave)

    print("Mensaje original:", mensaje)
    print("Cifrado:", cifrado)
    print("Descifrado:", descifrado)
