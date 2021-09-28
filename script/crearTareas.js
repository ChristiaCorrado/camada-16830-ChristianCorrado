//bienvenida a alumno
alumnoLog = sessionStorage.getItem("alumnoLog");

$("#userLogin").prepend(`<h2> ¡Te damos la bienvenida, ${alumnoLog}!</h2>`);

$("#btnLogout").click(() => {
  sessionStorage.clear();
  window.location.href = "../index.html";
});

// creador de tareas
const listaTarea = [];

const getDataTarea = () => {
  return (tarea = document.getElementById("nuevaTarea").value);
};

const clickNuevaTarea = document.getElementById("agregar");

clickNuevaTarea.addEventListener("click", () => {
  let obtenerTarea = getDataTarea();

  let id = listaTarea.length.toString();

  nuevaTarea = new Tarea(id, obtenerTarea);

  if (obtenerTarea === "") {
    $("#modalAgregarTarea").fadeIn(100);
  } else {
    listaTarea.push(nuevaTarea);

    localStorage.setItem(`listaTarea${alumnoLog}`, JSON.stringify(listaTarea));
    
    const tareaAgendada = document.getElementById("listaTarea");
    
    tareaGenerada = mostrarTareaDom();

    tareaAgendada.innerHTML = tareaGenerada;
    document.getElementById("formTareas").reset();
  }
});

const mostrarTareaDom = () => {
  let acumulador = ``;
  listaTarea.forEach((e) => {
    acumulador += `<div id="${e.tarea}" class="alert alert-warning  d-flex justify-content-between align-items-center">
  
          <p id="tareaCreada" class="m-0">Tarea ${e.tarea} </p>
          <div class=" m-0 d-flex align-item-center ">
          <i class="fas fa-check text-success p-1" role="button" onclick="tachar('${e.tarea}')" id="btnListo"></i>
          <i class="fas fa-times text-danger p-1" role="button" onclick="eliminar('${e.tarea}')" id="btnEliminar"></i>
          </div>
          </div>`;
  });

  return acumulador;
};

//tachar tarea lista
const tachar = (tarea) => {
  const tareaAtachar = document.getElementById(tarea);
  tareaAtachar.classList.add("tachar");
};

//eliminar tarea espesifica
const eliminar = (tarea) => {
  let posTarea = listaTarea.findIndex((elemento) => {
    return elemento.tarea === tarea;
  });

  $(`#${tarea}`).fadeOut(1000, () => {
    $(`#${tarea}`).remove();
  });
  
  listaTarea.splice(posTarea);

  localStorage.setItem(`listaTarea${alumnoLog}`, JSON.stringify(listaTarea));

};

//limpiar todas las tareas con un click
const limpiarTarea = () => {
  alertaBorrarTareas()
};

const alertaBorrarTareas = () => {
  Swal.fire({
    title: 'Completo todas sus tareas?',
    text: "si tiene pareas pendeintes, no podra recuperarlas",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Borrar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Borrado!',
        'Sus tareas fueron eliminadas correctamente',
        'success'
      )
      let limpiarDom = document.getElementById("listaTarea");
      while (limpiarDom.firstChild) {
        limpiarDom.removeChild(limpiarDom.firstChild);
      }
      listaTarea.splice(0, listaTarea.length);
      localStorage.removeItem(`listaTarea${alumnoLog}`);
      }
  })
}

const cargarTareas = () => {
    
  listaTareaJSON = JSON.parse(localStorage.getItem(`listaTarea${alumnoLog}`));
  listaTareaJSON.forEach(e => {
    listaTarea.push(e);
  });
  
  tareaLocalS = mostrarTareaDom();
  const tareaAgendada = document.getElementById("listaTarea");

  tareaAgendada.innerHTML = tareaLocalS;
};
