
$('#btnLogin').on('click', function () {
  $('#loginPage').toggle(500)
})

$('#btnRegister').on('click', function () {
  $('#registerPage').toggle(500)
})

$('#closeRegister').on('click', function () {
  $('#registerPage').hide(400)
})

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

//mostrar Register


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
  }else{
    getNewTeacherData();
    registrarProfesor();
    localStorage.setItem("profesorRegistrado", JSON.stringify(listaProfesor));
  }
}

//logearse funcionando
function loginProfesor() {
  if (!localStorage.getItem("profesorRegistrado")) {
    alert("no esta en el storage");
  } else if (localStorage.getItem("profesorRegistrado")) {
    getTeacherList();

    getTeacherData();

    newArrayTeacher.find((elemento) => {
      console.log(elemento);
      if (
        elemento.nombre === nombreProfesor &&
        elemento.apellido === apellidoProfesor
      ) {
        alert("esta Registrado");
        window.location.href = "pages/teacher.html";
      } else {
        alert("No se encuentra Registrado");
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
};

//logearse alumnos

function loginAlumnos() {
  if (!localStorage.getItem("alumnoRegistrado")) {
    alert("no esta en el storage");
  } else if (localStorage.getItem("alumnoRegistrado")) {
    getStudentList();

    getStudentData();

    newArray.find((elemento) => {
      console.log(elemento);
      if (
        elemento.nombre === nombreAlumno &&
        elemento.apellido === apellidoAlumno
      ) {
        alert("esta Registrado");
        window.location.href = "pages/student.html";
      } else {
        alert("No se encuentra Registrado");
      }
    });
  }
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
  let listaLocalTeacher = localStorage.getItem("profesorRegTeacher");
  if (listaLocalTeacher == null) {
    newArrayTeacher = [];
  } else {
    newArrayTeacher = JSON.parse(listaLocalTeacher);
  }
  return newArrayTeacher;
};
