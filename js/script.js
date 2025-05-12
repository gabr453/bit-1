"use strict";

function validarFormulario() {
  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let telefono = document.getElementById("telefono").value.trim();
  let asunto = document.getElementById("asunto").value.trim();
  let tipo = document.getElementById("tipo").value;
  let mensaje = document.getElementById("mensaje").value.trim();
  let terminos = document.getElementById("terminos").checked;

  let error = false;

  // Limpiar errores anteriores
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Limpiar evidencia anterior (si existe)
  const resultadoAnterior = document.getElementById("resultadoDatos");
  if (resultadoAnterior) {
    resultadoAnterior.remove();
  }

  // Validaciones
  if (nombre === "") {
    document.getElementById("errorNombre").textContent = "Por favor, ingresa tu nombre.";
    error = true;
  }

  if (correo === "") {
    document.getElementById("errorCorreo").textContent = "Por favor, ingresa tu correo.";
    error = true;
  } else if (!correo.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    document.getElementById("errorCorreo").textContent = "Correo inválido.";
    error = true;
  }

  if (telefono === "") {
    document.getElementById("errorTelefono").textContent = "Ingresa tu número de teléfono.";
    error = true;
  }

  if (asunto === "") {
    document.getElementById("errorAsunto").textContent = "Por favor, ingresa el asunto.";
    error = true;
  }

  if (tipo === "") {
    document.getElementById("errorTipo").textContent = "Selecciona el tipo de mensaje.";
    error = true;
  }

  if (mensaje === "") {
    document.getElementById("errorMensaje").textContent = "Por favor, escribe tu mensaje.";
    error = true;
  }

  if (!terminos) {
    document.getElementById("errorTerminos").textContent = "Debes aceptar los términos.";
    error = true;
  }

  // Si no hay errores, mostrar evidencia de los datos
  if (!error) {
    const datosIngresados = `
      <h3>Datos enviados:</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Asunto:</strong> ${asunto}</p>
      <p><strong>Tipo:</strong> ${tipo}</p>
      <p><strong>Mensaje:</strong> ${mensaje}</p>
    `;

    let divResultado = document.createElement("div");
    divResultado.id = "resultadoDatos";
    divResultado.innerHTML = datosIngresados;
    divResultado.style.background = "#e6f7e6";
    divResultado.style.padding = "20px";
    divResultado.style.marginTop = "20px";
    divResultado.style.borderLeft = "5px solid green";
    divResultado.style.fontFamily = "Arial, sans-serif";

    document.body.appendChild(divResultado);
  }

  return false; // Evita que se recargue la página
}
