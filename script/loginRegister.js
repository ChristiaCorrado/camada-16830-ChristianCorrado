//abre login cierra register
$('#btnLogin').on('click', function () {
  $('#loginPage').toggle(500)
  $('#registerPage').hide(400)
})

//abre register, cierra log
$('#btnRegister').on('click', function () {
  $('#loginPage').hide(500)
  $('#registerPage').toggle(500)
})

//boton closeRegister
$('#closeRegister').on('click', function () {
  $('#registerPage').hide(400)
})

//botones colse del login
$('#close2').on('click', function () {
  $('#loginPage').hide(400)
})

$('#close').on('click', function () {
  $('#loginPage').hide(400)
})

//desplegar menu movil
$('#bars').on('click', function () {
  $('#myLinks').slideToggle(500)
})

$('#btnNewRegistro').on('click', function () {
  $('#modalNewReg').hide(500)
})


//rotar tarjeta Login
const loginTeacher = document.getElementById("studentUsers");
const loginCard = document.getElementById("formLogin");
const loginStudent = document.getElementById("teacherUsers");

loginTeacher.addEventListener("click", () => {
  loginCard.classList.add("rotate");
});

loginStudent.addEventListener("click", () => {
  loginCard.classList.remove("rotate");
});



//registrarprofesor

function getNewTeacherData() {

  nombreNewProfesor = document.getElementById("nameRegister").value;
  apellidoNewProfesor = document.getElementById("surnameRegister").value;
  
}

const alertaVacio = () => {

  Swal.fire({
    icon: 'error',
    title: '¡Algo salió mal!',
    text: 'Debe completar todos los campos',
  })
}

const registrarProfesor = () => {
  nuevoProfesor = new Profesor(nombreNewProfesor, apellidoNewProfesor);
  listaProfesor.push(nuevoProfesor);
};


const selectElement = document.querySelector('.selectE');


let resultE = ''

selectElement.addEventListener('change', (event) => {
  let result = event.target.value
  resultE = result
});

const registrar = ()=>{
  if (resultE === '') {
    alertaVacio()
  } else if(resultE === 'student' ){
    getNewStudentData();
    registrarAlumno();
    localStorage.setItem("alumnoRegistrado", JSON.stringify(listaAlumnos));
    logOK()
    $('#registerPage').hide(400)
  }else{
    getNewTeacherData();
    registrarProfesor();
    localStorage.setItem("profesorRegistrado", JSON.stringify(listaProfesor));
    logOK()
    $('#registerPage').hide(400)
  }
    
}

const logOK = () => {
  Swal.fire(
    'Bienvenido!',
    'Puede iniciar sesion',
    'success'
  )
}

//logearse funcionando
function loginProfesor() {
  if (!localStorage.getItem("profesorRegistrado")) {
    noRegistradoAlert()
  } else if (localStorage.getItem("profesorRegistrado")) {
    getTeacherList();

    getTeacherData();

    newArrayTeacher.find((elemento) => {
      
      if (
        elemento.nombre === nombreProfesor &&
        elemento.apellido === apellidoProfesor
      ) {        
        sessionStorage.setItem('profeLog', elemento.apellido)
        window.location.href = "pages/teacher.html";
      } else {
        noRegistradoAlert()
      }
    });
  }
}

//Register Alumno
function getNewStudentData() {
  nombreNewStudent = $("#nameRegister").val();
  apellidoNewStudent =  $("#surnameRegister").val();
  if (nombreNewStudent || apellidoNewStudent === ``) {
    noRegistradoAlert()
  }
}

const registrarAlumno = () => {
  nuevoAlumno = new Alumnos($("#nameRegister").val(), $("#surnameRegister").val());
  listaAlumnos.push(nuevoAlumno);
 
  registradoOK()
};

const registradoOK = () => {

  Swal.fire(
    '¡Registro con exito!',
    'Ya puede Iniciar sesión!',
    'success'
  )
}


//logearse alumnos

function loginAlumnos() {
  if (!localStorage.getItem("alumnoRegistrado")) {
    noRegistradoAlert()
  } else if (localStorage.getItem("alumnoRegistrado")) {
    getStudentList();

    getStudentData();

    newArray.find((elemento) => {
      
      if (
        elemento.nombre === nombreAlumno &&
        elemento.apellido === apellidoAlumno
      ) {
        sessionStorage.setItem('alumnoLog', elemento.apellido)
        window.location.href = "pages/student.html";
      } else {
        noRegistradoAlert()
      }
    });
  }
}

const noRegistradoAlert = () => {

  Swal.fire({
    icon: 'error',
    title: '¡Algo salió mal!',
    text: 'Debe ser usuario Registrado',
  })
}

const getStudentList = () => {
  let listaLocalStudent = localStorage.getItem("alumnoRegistrado");
  if (listaLocalStudent == null) {
    newArray = [];
  } else {
    newArray = JSON.parse(listaLocalStudent);
  }
  return newArray;
};

const getTeacherList = () => {
  let listaLocalTeacher = localStorage.getItem("profesorRegistrado");
  if (listaLocalTeacher == null) {
    newArrayTeacher = [];
  } else {
    newArrayTeacher = JSON.parse(listaLocalTeacher);
  }
  return newArrayTeacher;
};


