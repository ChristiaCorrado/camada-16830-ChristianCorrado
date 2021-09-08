//mostrar Login
const openLogin = document.getElementById("btnLogin");
const modalLogin = document.getElementById("loginPage");
const closeWindow = document.getElementById("close");
const closeWindow2 = document.getElementById("close2");

openLogin.addEventListener("click", () => {
  modalLogin.classList.add("show");
});

closeWindow.addEventListener("click", () => {
  modalLogin.classList.remove("show");
});

closeWindow2.addEventListener("click", () => {
  modalLogin.classList.remove("show");
});

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
const openRegister = document.getElementById("btnRegister");
const modalRegister = document.getElementById("registerPage");
const closeWindowR = document.getElementById("closeRegister");

openRegister.addEventListener("click", () => {
  modalRegister.classList.add("show");
});

closeWindowR.addEventListener("click", () => {
  modalRegister.classList.remove("show");
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

const newRegistro = document.getElementById("registerOK");

const selectRProfesor = document.getElementById("selectTeacher");

selectRProfesor.addEventListener("click", () => {
  newRegistro.addEventListener("click", () => {
    getNewTeacherData();
    registrarProfesor();
    localStorage.setItem("profesorRegistrado", JSON.stringify(listaProfesor));
  });
});

//logearse funcionando
function loginProfesor() {
  getTeacherData();

  listaProfesor.find((elemento) => {
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

//Register Alumno
function getNewStudentData() {
  nombreNewStudent = document.getElementById("nameRegister").value;
  apellidoNewStudent = document.getElementById("surnameRegister").value;
}

const registrarAlumno = () => {
  nuevoAlumno = new Alumnos(nombreNewStudent, apellidoNewStudent);
  listaAlumnos.push(nuevoAlumno);
  console.log(listaAlumnos);
};

const selectRStudent = document.getElementById("selectStudent");

selectRStudent.addEventListener("click", () => {
  newRegistro.addEventListener("click", () => {
    getNewStudentData();
    registrarAlumno();
    localStorage.setItem("alumnoRegistrado", JSON.stringify(listaAlumnos));
  });
});

const newArray = []
console.log
//logearse alumnos
function loginAlumnos() {
  if (localStorage.getItem("alumnoRegistrado")) {

    alert("no esta en el storage");


  } else {

    newArray.push(JSON.parse(localStorage.getItem(persona)))

    
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
  {
    getStudentData();
    
    listaAlumnos.find((elemento) => {
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
