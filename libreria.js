

function convertirMayusculas(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}

function contarpalabrastexto(texto) {
  return texto.trim().split(/\s+/).length
}

function quitarEspacios(texto) {
  return texto.replace(/\s+/g, " ").trim()
}


