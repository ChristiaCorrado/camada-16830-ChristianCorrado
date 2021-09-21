
//bienvenida al profe
$('#userLoginT').prepend(`<h2> Bienvenido Profesor ${usuarioLog} </h2>`);

//logout limpiar sessionStore
$('#btnLogout').click( ()=>{
    sessionStorage.clear()
    window.location.href = "../index.html"
})


//creador del semanal

const semanal = []

const selectDia = document.getElementById("dia");

resultDia = ``
selectDia.addEventListener('change', (event) => {
    let result = event.target.value
    resultDia = result
    console.log(resultDia);
});


const selectHorario = document.getElementById("horario");

resultHorario = ``
selectHorario.addEventListener('change', (event) => {
    let result2 = event.target.value
    resultHorario = result2
    console.log(resultHorario);
});



const getIntinerario = () => {
    return document.getElementById("intinerario").value;
}



//construir intineario
const construirTd = (i) =>{
    intinerario = i

    let nuevoSemanal = new Semanal(resultDia, resultHorario, intinerario)

    semanal.push(nuevoSemanal)

    const selectTd = document.getElementById(`${resultDia}${resultHorario}`)

    selectTd.innerHTML = intinerario

    document.getElementById('semanal').reset();
}



//grabar intinerario
const grabarIntinerario = () =>{
    localStorage.setItem(usuarioLog ,JSON.stringify(semanal))
}

//cargar intinerario grabado

const cargarIntinerario = ()=>{

    semanalGuardado = (JSON.parse(localStorage.getItem(usuarioLog)))

    semanalGuardado.forEach(e => {
        actividad = e.actividad
        resultDia = e.dia
        resultHorario = e.horario 

        construirTd(actividad)
    });

}

const limpiarSemanal = () =>{
    localStorage.removeItem(usuarioLog)
}