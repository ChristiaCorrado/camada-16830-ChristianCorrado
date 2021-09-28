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
  localStorage.setItem(`semanal${usuarioLog}`, JSON.stringify(semanal));
  grabadoOK()
};

const grabadoOK = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Cambios Guardados correctamente',
    showConfirmButton: false,
    timer: 1500
  })
}

//cargar intinerario grabado

const cargarIntinerario = () => {
  semanalGuardado = JSON.parse(localStorage.getItem(`semanal${usuarioLog}`));

  semanalGuardado.forEach((e) => {
    actividad = e.actividad;
    resultDia = e.dia;
    resultHorario = e.horario;

    construirTd(actividad);
  });
};

const limpiarSemanal = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      localStorage.removeItem(`semanal${usuarioLog}`);
    }
  })
};

//localStorage.removeItem(usuarioLog);

const cargarDatosAlumno = () => {
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
    grabadoOK()
    localStorage.setItem(`listaAlumno${usuarioLog}`, JSON.stringify(listaAlumnoProfesor));
      
}

const cargarAlumnos = () => {

  alumnosEnLocal = JSON.parse(localStorage.getItem(`listaAlumnocorrado`));

  alumnosEnLocal.forEach((e) => {
    nuevoAlumnoRegistrado = new Alumnos(e.nombre, e.apellido,e.dni)
    obtenerAlumno = nuevoAlumnoRegistrado;
    listaAlumnoProfesor.push(obtenerAlumno);
    alumnoGenerado = mostrarAlumnosDom();

    alumnoOK.innerHTML = alumnoGenerado;

  });
};

cargarAlumnos()