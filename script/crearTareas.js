const getDataTarea = () => {
    return tarea = document.getElementById("nuevaTarea").value;

}




const clickNuevaTarea = document.getElementById("agregar")

clickNuevaTarea.addEventListener('click', ()=>{

    // let inputTarea = getDataTarea();

    let txt = document.getElementById("listaTarea");

    
    listaTarea.push(getDataTarea());
    
    listaTarea.forEach(element => {

        txt.innerHTML = `<p> ${element} </p>`
        
    });
})


