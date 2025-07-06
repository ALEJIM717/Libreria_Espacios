# Libreria_Espacios

## Instituto Tecnológico de Oaxaca

**Estudiantes:**  
- Rodríguez Hernández Alexa Isabel  
- Jiménez Osorio Christopher Martín  

**Equipo 8** 

**Materia:** Programación Web  
**Tarea:** Librería 
**Periodo:** Verano 2025  

#### **Instalación**
Incluirla en un .html con la siguiente nomenclatura 
<script src="libreria.js"></script>

#### **Uso**
Uso en HTML
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <title>Prueba TextoUtils</title>
</head>

<body>
  <input type="text" id="nombre">
  <input type="text" id="resultadomayuscula">
  <input type="text" id="contar">
  <input type="text" id="resultadocontar">
  <input type="text" id="espacios">
  <input type="text" id="resultadoespacios">
  
  <button onclick="resultadomayuscula()">Enviar</button>
  <button onclick="resultadocontar()">Contar palabras</button>
  <button onclick="resultadoespacios()">Quitar espacios extra</button>

  <script src="libreria.js"></script>

  
  <script> 

    function convertirMayusculas(texto) {
      return texto.charAt(0).toUpperCase() + texto.slice(1)
    }
    
    function contarpalabrastexto(texto) {
      return texto.trim().split(/\s+/).length
    }
    
    function quitarEspacios(texto) {
      return texto.replace(/\s+/g, " ").trim()
    }
    
    
    </script>
  <script>
    function resultadomayuscula() {
      let nombre = document.getElementById("nombre").value;
      let mayus = convertirMayusculas(nombre);
      document.getElementById("resultadomayuscula").value = mayus;
    }

    function resultadocontar() {
      let contar = document.getElementById("contar").value;
      let contado = contarpalabrastexto(contar);
      document.getElementById("resultadocontar").value = contado;
    }

    function resultadoespacios() {
      let espacios = document.getElementById("espacios").value;
      let limpio = quitarEspacios(espacios);
      document.getElementById("resultadoespacios").value = limpio;
    }

  </script>
</body>

</html>

#### **Capturas de pantalla**
![Funcionamiento](./libreria_imagenn.png)


#### Video 
https://drive.google.com/drive/folders/1AlFHFEs91bzrxFTpVgxhVvLXxSc1wu9u?usp=sharing
