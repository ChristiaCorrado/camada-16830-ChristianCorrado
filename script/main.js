const asignatura =['Matematica','Biologia','Educacion Fisica','Tecnologia','Literatura','Musica','Historia','Geografia','Quimica','Fisica'];
const listaAlumnos = [];
const listaProfesor = [];
const dias = ['lunes','martes','miercoles','jueves','viernes']
const listaTarea = [];
const inputs = document.querySelectorAll('#formLogin input')


const validarLogin = (e)=>{
  switch(e.target.name) {
    case "nameTeacher":
      if (e.target.value === '') {
        document.getElementById("invalidNameTeacher").classList.add("mostrarIncorrecto")
      }else {
        document.getElementById("invalidNameTeacher").classList.remove("mostrarIncorrecto")
      };
      break;

      case "surnameTeacher":
        if (e.target.value === '') {
          document.getElementById("invalidSurnameTeacher").classList.add("mostrarIncorrecto")
        } else {
          document.getElementById("invalidSurnameTeacher").classList.remove("mostrarIncorrecto")
        };
      break;

      case "nameStudent":
        if (e.target.value === '') {
          document.getElementById("invalidNameStudent").classList.add("mostrarIncorrecto")
        } else {
          document.getElementById("invalidNameStudent").classList.remove("mostrarIncorrecto")
        };

      case "surnameStudent":
        if (e.target.value === '') {
          document.getElementById("invalidSurnameStudent").classList.add("mostrarIncorrecto")
        } else {
          document.getElementById("invalidSurnameStudent").classList.remove("mostrarIncorrecto")
        };

      break
  };
}

inputs.forEach((input)=>{
  input.addEventListener('keyup', validarLogin)
  input.addEventListener('blur', validarLogin)
})


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


const teacherIsLogin = document.getElementById('teacherOk');

teacherIsLogin.addEventListener('click',()=>{
  loginProfesor();
});






const studentIsLogin = document.getElementById('studentOk');

studentIsLogin.addEventListener('click',()=>{
  loginAlumnos();
});


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


