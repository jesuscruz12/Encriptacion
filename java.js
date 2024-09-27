// Cifrado César
function cifrarCesar() {
  const mensaje = document.getElementById("cesar-message").value;
  const desplazamiento = parseInt(document.getElementById("cesar-shift").value);
  if (!mensaje || isNaN(desplazamiento)) {
    mostrarError("Por favor, ingresa un mensaje y un desplazamiento válidos.");
    return;
  }
  let resultado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let codigo = mensaje.charCodeAt(i);
    if (codigo >= 65 && codigo <= 90) {
      resultado += String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
    } else if (codigo >= 97 && codigo <= 122) {
      resultado += String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
    } else {
      resultado += mensaje.charAt(i);
    }
  }
  mostrarResultado("cesar", resultado);
}

function descifrarCesar() {
  const mensaje = document.getElementById("cesar-message").value;
  const desplazamiento = parseInt(document.getElementById("cesar-shift").value);
  if (!mensaje || isNaN(desplazamiento)) {
    mostrarError("Por favor, ingresa un mensaje y un desplazamiento válidos.");
    return;
  }
  let resultado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let codigo = mensaje.charCodeAt(i);
    if (codigo >= 65 && codigo <= 90) {
      resultado += String.fromCharCode(((codigo - 65 - desplazamiento + 26) % 26) + 65);
    } else if (codigo >= 97 && codigo <= 122) {
      resultado += String.fromCharCode(((codigo - 97 - desplazamiento + 26) % 26) + 97);
    } else {
      resultado += mensaje.charAt(i);
    }
  }
  mostrarResultado("cesar", resultado);
}

// Cifrado Escítala
function cifrarEscitala() {
  const mensaje = document.getElementById("escitala-message").value;
  let columnas = parseInt(document.getElementById("escitala-key").value);

  if (!mensaje || isNaN(columnas) || columnas <= 0) {
    mostrarError("Por favor, ingresa un mensaje y una clave válidos.");
    return;
  }

  if (columnas > mensaje.length) {
    mostrarError("El número de columnas es mayor que la longitud del mensaje. El cifrado puede no ser efectivo.");
  }

  let resultado = "";
  for (let i = 0; i < columnas; i++) {
    for (let j = i; j < mensaje.length; j += columnas) {
      resultado += mensaje[j];
    }
  }
  mostrarResultado("escitala", resultado);
}

function descifrarEscitala() {
  const mensaje = document.getElementById("escitala-message").value;
  let columnas = parseInt(document.getElementById("escitala-key").value);

  if (!mensaje || isNaN(columnas) || columnas <= 0) {
    mostrarError("Por favor, ingresa un mensaje y una clave válidos.");
    return;
  }

  if (columnas > mensaje.length) {
    mostrarError("El número de columnas es mayor que la longitud del mensaje. Considere que el descifrado puede no tener efecto o ser el mismo.");
  }

  let filas = Math.ceil(mensaje.length / columnas);
  let resultado = new Array(mensaje.length);
  let index = 0;

  for (let i = 0; i < columnas; i++) {
    for (let j = i; j < mensaje.length; j += columnas) {
      resultado[j] = mensaje[index++];
    }
  }
  mostrarResultado("escitala", resultado.join(""));
}

// Función para mostrar el resultado cifrado/descifrado
function mostrarResultado(tipo, mensaje) {
  const outputContainer = document.getElementById(`${tipo}-output-container`);
  const outputElement = document.getElementById(`${tipo}-output`);

  outputElement.textContent = mensaje; // Muestra solo el mensaje cifrado/descifrado
  outputContainer.style.display = 'block'; // Muestra el contenedor del resultado
  ocultarError(); // Ocultar mensajes de error si los hay
}

// Manejo de errores
function mostrarError(mensaje) {
  document.getElementById("alert-message").textContent = mensaje; // Cambia el mensaje de error
  document.getElementById("alert-box").style.display = "block"; // Muestra el cuadro de alerta
}

function cerrarAlerta() {
  document.getElementById("alert-box").style.display = "none"; // Oculta el cuadro de alerta
}

