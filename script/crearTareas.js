const getDataTarea = () => {

    if (document.getElementById("nuevaTarea").value === '') {
        console.log('vacio')
        return
    }else{

    return tarea = document.getElementById("nuevaTarea").value;
    }
}



const clickNuevaTarea = document.getElementById("agregar")

clickNuevaTarea.addEventListener('click', ()=>{

    
    listaTarea.push(getDataTarea());

    const tareaAgendada = document.getElementById("listaTarea")

    let acumulador = ``;
    listaTarea.forEach(e => {

        acumulador+= `<div  class="alert alert-warning  d-flex justify-content-between align-items-center">

        <p id="tareaCreada" class="m-0">Tarea ${e} </p>
        <div class=" m-0 d-flex align-item-center ">
        <i class="fas fa-check text-success p-1" role="button" onclick="tachar()" id="btnListo"></i>
        <i class="fas fa-times text-danger p-1" role="button" id="btnEliminar"></i>
        </div>
        </div>`
        
    });
                
    tareaAgendada.innerHTML = acumulador;
  
})

const tachar = ()=>{

    const tareaSeleccionada = document.getElementById("tareaCreada");
    const accionTachar = document.getElementById("btnListo");
    
    accionTachar.addEventListener('click', ()=>{
        tareaSeleccionada.classList.add('tachar')
    })
}
