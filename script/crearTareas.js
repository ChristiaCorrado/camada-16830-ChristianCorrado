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

        <p class="m-0">Tarea ${e} </p>
        <div class=" m-0 d-flex align-item-center ">
          <i class="fas fa-check text-success p-1"></i>
          <i class="fas fa-times text-danger p-1"></i>
        </div>
        </div>`
        
    });
                
    tareaAgendada.innerHTML = acumulador;
  
})


