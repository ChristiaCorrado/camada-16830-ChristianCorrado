//abre login
$('#btnLogin').on('click', function () {
  $('#loginPage').toggle(500)
})

//abre register
$('#btnRegister').on('click', function () {
  $('#registerPage').toggle(500)
})
// Si aparece modalNoregistrado al hacer click en now abre register
$('#btnNow').on('click', function () {
  $('#registerPage').toggle(500)
  $("#loginPage").hide(400)
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

const registrarProfesor = () => {
  nuevoProfesor = new Profesor(nombreNewProfesor, apellidoNewProfesor);
  listaProfesor.push(nuevoProfesor);
  console.log(listaProfesor);
};


const selectElement = document.querySelector('.selectE');


let resultE = ''

selectElement.addEventListener('change', (event) => {
  let result = event.target.value
  resultE = result
});

const registrar = ()=>{
  if (resultE === 'student') {
    getNewStudentData();
    registrarAlumno();
    localStorage.setItem("alumnoRegistrado", JSON.stringify(listaAlumnos));
    $('#registerPage').hide(400)
  }else{
    getNewTeacherData();
    registrarProfesor();
    localStorage.setItem("profesorRegistrado", JSON.stringify(listaProfesor));
    $('#registerPage').hide(400)
  }
}

//logearse funcionando
function loginProfesor() {
  if (!localStorage.getItem("profesorRegistrado")) {
    $("#modalNoregistrado").fadeIn(100)
  } else if (localStorage.getItem("profesorRegistrado")) {
    getTeacherList();

    getTeacherData();

    newArrayTeacher.find((elemento) => {
      console.log(elemento);
      if (
        elemento.nombre === nombreProfesor &&
        elemento.apellido === apellidoProfesor
      ) {        
        sessionStorage.setItem('profeLog', elemento.apellido)
        window.location.href = "pages/teacher.html";
      } else {
        $("#modalNoregistrado").fadeIn(100)
      }
    });
  }
}

//Register Alumno
function getNewStudentData() {
  nombreNewStudent = $("#nameRegister").val();
  
  apellidoNewStudent =  $("#surnameRegister").val();
}

const registrarAlumno = () => {
  nuevoAlumno = new Alumnos($("#nameRegister").val(), $("#surnameRegister").val());
  listaAlumnos.push(nuevoAlumno);
  console.log(listaAlumnos);
  $("#modalNewReg").fadeIn(100)
};

//logearse alumnos

function loginAlumnos() {
  if (!localStorage.getItem("alumnoRegistrado")) {
    $("#modalNoregistrado").fadeIn(100)
  } else if (localStorage.getItem("alumnoRegistrado")) {
    getStudentList();

    getStudentData();

    newArray.find((elemento) => {
      console.log(elemento);
      if (
        elemento.nombre === nombreAlumno &&
        elemento.apellido === apellidoAlumno
      ) {
        sessionStorage.setItem('alumnoLog', elemento.apellido)
        window.location.href = "pages/student.html";
      } else {
        $("#modalNoregistrado").fadeIn(100)
      }
    });
  }
}

const closeNR = ()=>{
  $("#modalNoregistrado").fadeOut(100)
}

const closeIR = ()=>{
  $("#modalNewReg").fadeOut(100)
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


