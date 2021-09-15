
alumnoLog = sessionStorage.getItem('alumnoLog')

$('#userLogin').prepend(`<h2> Bienvenido Alumno ${alumnoLog} </h2>`);

$('#btnLogout').click( ()=>{
    sessionStorage.clear()
    window.location.href = "../index.html"
})

const listaTarea = [];

const getDataTarea = () => {
    return tarea = document.getElementById("nuevaTarea").value;
}

const clickLimpiarTodo = document.getElementById("limpiar")
clickLimpiarTodo.addEventListener('click', ()=>{

})

const clickNuevaTarea = document.getElementById("agregar")

clickNuevaTarea.addEventListener('click', ()=>{

    let obtenerTarea = getDataTarea();

    let id = listaTarea.length.toString();

    nuevaTarea = new Tarea(id,obtenerTarea)
    

    if (obtenerTarea === '') {
        
        alert('No tiene tareas para agregar')
        
    }else{
    
        listaTarea.push(nuevaTarea)

    const tareaAgendada = document.getElementById("listaTarea")


    let acumulador = ``;
    listaTarea.forEach(e => {

        acumulador+= `<div id="${e.tarea}" class="alert alert-warning  d-flex justify-content-between align-items-center">

        <p id="tareaCreada" class="m-0">Tarea ${e.tarea} </p>
        <div class=" m-0 d-flex align-item-center ">
        <i class="fas fa-check text-success p-1" role="button" onclick="tachar('${e.tarea}')" id="btnListo"></i>
        <i class="fas fa-times text-danger p-1" role="button" onclick="eliminar('${e.tarea}')" id="btnEliminar"></i>
        </div>
        </div>`
        
    });
                
    tareaAgendada.innerHTML = acumulador;
}
})


const tachar = (tarea)=>{
    const tEncontado = listaTarea.find(listaTarea=> listaTarea.tarea === tarea)
    const tareaAtachar = document.getElementById(tarea)
    tareaAtachar.classList.add("tachar")
}

const eliminar = (tarea)=>{
    let posTarea = listaTarea.findIndex(elemnto =>{return elemnto.tarea === tarea})
    console.log(posTarea);
    $(`#${tarea}`).fadeOut(1000 , () => { $(`#${tarea}`).remove() })
    listaTarea.splice(posTarea)
    console.log(posTarea);

}