//bienvenida al profe
$("#userLoginT").prepend(`<h2> ¡Te damos la bienvenida, ${usuarioLog}!  </h2>`);

//logout limpiar sessionStore
$("#btnLogout").click(() => {
  sessionStorage.clear();
  window.location.href = "../index.html";
});

//creador del semanal

const semanal = [];

const selectDia = document.getElementById("dia");

resultDia = ``;
selectDia.addEventListener("change", (event) => {
  let result = event.target.value;
  resultDia = result;
});

const selectHorario = document.getElementById("horario");

resultHorario = ``;
selectHorario.addEventListener("change", (event) => {
  let result2 = event.target.value;
  resultHorario = result2;
});

const getIntinerario = () => {
  return document.getElementById("intinerario").value;
};

//construir intineario
const construirTd = (i) => {
  intinerario = i;

  let nuevoSemanal = new Semanal(resultDia, resultHorario, intinerario);

  semanal.push(nuevoSemanal);

  const selectTd = document.getElementById(`${resultDia}${resultHorario}`);

  selectTd.innerHTML = intinerario;

  document.getElementById("semanal").reset();
};

//grabar intinerario
const grabarIntinerario = () => {
  localStorage.setItem(usuarioLog, JSON.stringify(semanal));
  $("#modalTareaGrabada").fadeIn(100);
};

//cargar intinerario grabado

const cargarIntinerario = () => {
  semanalGuardado = JSON.parse(localStorage.getItem(usuarioLog));

  semanalGuardado.forEach((e) => {
    actividad = e.actividad;
    resultDia = e.dia;
    resultHorario = e.horario;

    construirTd(actividad);
  });
};

const limpiarSemanal = () => {
  localStorage.removeItem(usuarioLog);
  $('#modalResetSemanal').fadeIn(400)
};

const cargarDatos = () => {
  cargarIntinerario();
  cargarTareas();
};

const cargarDatosTeacher = () => {
  cargarIntinerario();
  cargarAlumnos();
};

//crear lista de alumnos

const listaAlumnoProfesor = [];

const getDataAlumno = () => {
  let nuevoAlumnoRegistrado = new Alumnos(
    document.getElementById("nombre").value,
    document.getElementById("apellido").value,
    document.getElementById("dni").value
  );

  return nuevoAlumnoRegistrado;
};

const clickRegAlumno = document.getElementById("agregarAlumnoOK");

clickRegAlumno.addEventListener("click", () => {
  let obtenerAlumno = getDataAlumno();

  listaAlumnoProfesor.push(obtenerAlumno);

  
  const alumnoOK = document.getElementById("alumnoOK");

  alumnoGenerado = mostrarAlumnosDom();

  alumnoOK.innerHTML = alumnoGenerado;

  document.getElementById("cargarAlumnos").reset();
});

const mostrarAlumnosDom = () => {
  let acumulador = ``;
  listaAlumnoProfesor.forEach((e) => {
    acumulador += `<li class="d-flex justify-content-around bg-light rounded-pill list-group-item">
    <div id="nombre">${e.nombre}</div>
    <div id="apellido">${e.apellido}</div>
    <div id="dni">${e.dni}</div>
  </li>`;
  });

  return acumulador;
};

const guardarAlumnos = () => {
    localStorage.setItem(
        `listaAlumno${usuarioLog}`,
        JSON.stringify(listaAlumnoProfesor)
      );
      $("#modalAlumnoG").fadeIn(100);
}

const cargarAlumnos = () => {
  alumnosGuardadoJSON = JSON.parse(
    localStorage.getItem(`listaAlumno${usuarioLog}`)
  );

  alumnosGuardadoJSON.forEach((e) => {
    listaAlumnoProfesor.push(e);
  });
  const alumnoOK = document.getElementById("alumnoOK");

  alumnoGenerado = mostrarAlumnosDom();

  alumnoOK.innerHTML = alumnoGenerado;
};

const closeModal = (id) => {
    $(`#${id}`).fadeOut(100);

};



// En las mismas vistas al presionar el botón limpiar, elimina solamente el storage pero no el itinerario de la semana, un aviso también estaría bien.
// Podrías también investigar cómo agregarle Firebase al proyecto para que el itinerario se guarde en una base de datos en la nube (sería algo extra pero podría guiarte si querés hacerlo y necesitas ayuda).
