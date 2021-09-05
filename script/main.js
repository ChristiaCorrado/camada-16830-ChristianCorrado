const asignatura =['Matematica','Biologia','Educacion Fisica','Tecnologia','Literatura','Musica','Historia','Geografia','Quimica','Fisica'];
const listaAlumnos = [];
const listaProfesor = [];
const dias = ['lunes','martes','miercoles','jueves','viernes']
const listaTarea = [];


//tomar datos de profesorlist
function getTeacherData() {
  nombreProfesor = document.getElementById("nameTeacher").value;
  apellidoProfesor = document.getElementById("surnameTeacher").value;
}

//tomar datos de alumnos
function getStudentData() {
  nombreAlumno = document.getElementById("nameStudent").value;
  apellidoAlumno = document.getElementById("surnameStudent").value;
}

// funcion login de profes
function loginProfesor() {

  getTeacherData();

  let contenedor = document.getElementById("userLogin");

  contenedor.innerHTML = `<h3>Bienvenido Profesor ${nombreProfesor} ${apellidoProfesor}</h3>`;

}

const teacherIsLogin = document.getElementById('teacherOk');

teacherIsLogin.addEventListener('click',()=>{
  loginProfesor();
});


// funcion login de alumnos
function loginAlumnos() {

  getStudentData();

  let contenedor = document.getElementById("userLogin");

  contenedor.innerHTML = `<h3>Bienvenido Alumno ${nombreAlumno} ${apellidoAlumno}</h3>`;

}


const studentIsLogin = document.getElementById('studentOk');

studentIsLogin.addEventListener('click',()=>{
  loginAlumnos();
});


//funcion agregar al array Alumnos
function agregarAlumnos() {
  listaAlumnos.push(nuevoAlumno);
}

//Registro de alumnos
function registrarAlumnos() {

  if (confirmacion) {
    for (let i = 0; i < alumnosInscriptos; i++) {
      let nombre = document.getElementById("nameStudent");
      let apellido = document.getElementById("surnameAlumno");
      let dni = document.getElementById("dniStudent")

      nuevoAlumno = new Alumnos(nombre, apellido, edad);
      agregarAlumnos();
      console.log(nuevoAlumno);
    }
}

//ordenar alumnos por apellido
function orderStudents() {
  listaAlumnos.sort((a1, a2) => {
    const apellidoA = a1.apellido.toLowerCase();
    const apellidoB = a2.apellido.toLowerCase();
  
    if (apellidoA < apellidoB) {
      return -1;
    } else if (apellidoA > apellidoB) {
      return 1;
    } else {
      return 0;
    }
  })
  }
}


