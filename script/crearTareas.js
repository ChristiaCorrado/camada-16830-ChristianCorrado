const getDataTarea = () => {
    return tarea = document.getElementById("nuevaTarea").value;
}

const clickLimpiarTodo = document.getElementById("limpiar")
clickLimpiarTodo.addEventListener('click', ()=>{

})

const clickNuevaTarea = document.getElementById("agregar")

clickNuevaTarea.addEventListener('click', ()=>{

    let obtenerTarea = getDataTarea();

    let id = listaTarea.length;

    nuevaTarea = new Tarea(id,obtenerTarea)
    

    if (obtenerTarea === '') {
        
        alert('No tiene tareas para agregar')
        
    }else{
    
    listaTarea.push(nuevaTarea);

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

const eliminar = (tarea)=>{
    const tEncontado = listaTarea.find(listaTarea=> listaTarea.tarea === tarea)
    let posTarea = listaTarea.indexOf(tarea)
    const tareaAtachar = document.getElementById(tarea)
    tareaAtachar.parentNode.removeChild(tareaAtachar)
    console.log(posTarea);

}

const tachar = (tarea)=>{
    const tEncontado = listaTarea.find(listaTarea=> listaTarea.tarea === tarea)
    const tareaAtachar = document.getElementById(tarea)
    tareaAtachar.classList.add("tachar")
}
