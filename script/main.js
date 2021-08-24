class Profesor{
    constructor(nombre,apellido){
        this.nombre = nombre|| undefined;
        this.apellido = apellido|| undefined;
    }
}

class Alumnos{
    constructor(nombre,apellido,edad){
        this.nombre = nombre || undefined;
        this.apellido = apellido || undefined;
        this.edad = edad || edad || undefined;
    }
}

let espacioMaximo = 10;
const listaAlumnos = [];
const listaProfesor = [];


// funcion log de profes
function loginProfesor(){

    let nombre = prompt('Hola Profesor ingrese su Nombre');
    let apellido = prompt('Ingrese su apellido');
    
    let  profesor1 = new Profesor(nombre,apellido);

    alert( 'Bienvenido Profesor '+ profesor1.nombre +' ' + profesor1.apellido);   
}

loginProfesor();

let alumnosInscriptos = solicitarAlumnos();

//funcion registrar alumnos a la clase
function solicitarAlumnos() {
    return parseFloat(prompt(`Ingrese la Cantidad de alumnos inscriptos a su curso`));  
}


// calculo de espacio disponible
function diferencia( a,b){
    return a - b;
}

//funcion agregar al array
function agregarAlumnos(){
    listaAlumnos.push(nuevoAlumno);
}

//Registro de alumnos
function registrarAlumnos() {

    let confirmacion = confirm( 'Ingreso ' + alumnosInscriptos + ' alumnos inscriptos. Es Correcto?');

    console.log(confirmacion);

    if(confirmacion){
        
         for (let i = 0; i < alumnosInscriptos; i++) {
             let nombre = prompt('Ingrese el nombre del alumno');
             let apellido = prompt('Ingrese apellido del alumno');
             let edad = prompt('Ingrese la edad');

            nuevoAlumno = new Alumnos(nombre,apellido,edad);
            agregarAlumnos();
            console.log(nuevoAlumno);
            console.log(listaAlumnos);
         }
    }
    else{
        alert('Tiene 48 hs para cargar los alumnos, no lo olvide.');
    }
}

registrarAlumnos();



while (alumnosInscriptos > 0) {
    
    if (alumnosInscriptos < espacioMaximo) {

        let resultado = diferencia(espacioMaximo,alumnosInscriptos);
        alert(`Se registraron los alumnos con exito cuenta con espacio suficiente para agregar ${resultado} alumnos a la clase`);
        break;
    }
    else if(alumnosInscriptos > espacioMaximo) {
        let resultado = diferencia(alumnosInscriptos,espacioMaximo);
        alert(`Los alumnos se registraon con exito pero tiene demaciados alumnos inscriptos para esta clase, debera reasignar camada para ${resultado} alumnos`);
        break;
    }
    else {
        alert('Excelente!!... el aula esta completa.');
        break;
    }
    
}

// listaAlumnos.forEach(listaAlumnos => {
//     console.log(listaAlumnos.nombre + ' ' + listaAlumnos.apellido);
// });