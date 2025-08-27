def cifrado_cesar(texto, desplazamiento):
    resultado = ""

    for char in texto:
        if char.isalpha():  # letras
            base = ord('A') if char.isupper() else ord('a')
            resultado += chr((ord(char) - base + desplazamiento) % 26 + base)

        elif char.isdigit():  # números
            base = ord('0')
            resultado += chr((ord(char) - base + desplazamiento) % 10 + base)

        else:  # espacios, símbolos, etc.
            resultado += char

    return resultado


# Ejemplo de uso
if __name__ == "__main__":
    mensaje = input("Introduce el mensaje a cifrar: ")
    clave = 3 # Desplazamiento fijo de 3 para el cifrado César

    cifrado = cifrado_cesar(mensaje, clave)
    descifrado = cifrado_cesar(cifrado, -clave)

    print("Mensaje original:", mensaje)
    print("Cifrado:", cifrado)
    print("Descifrado:", descifrado)
