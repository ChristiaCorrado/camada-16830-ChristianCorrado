let espacioMaximo = 10;
const asignatura =['Matematica','Biologia','Educacion Fisica','Tecnologia','Literatura','Musica','Historia','Geografia','Quimica','Fisica'];
const listaAlumnos = [];
const listaProfesor = [];

//tomar datos de profesor
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




// let alumnosInscriptos = solicitarAlumnos();

function validarCeroAlumno() {
    let alumnos = alumnosInscriptos;
  while (alumnos === 0) {
    alert("Ingreso la cantidad de 0 (cero) alumnos inscriptos");
    alumnos = solicitarAlumnos();
    alumnosInscriptos = alumnos;
  }

}

//funcion registrar alumnos a la clase
function solicitarAlumnos() {
  return parseFloat(
    prompt(`Ingrese la Cantidad de alumnos inscriptos a su curso (numeros)`)
  );
}

// calculo de espacio disponible
function diferencia(a, b) {
  return a - b;
}

//funcion agregar al array Alumnos
function agregarAlumnos() {
  listaAlumnos.push(nuevoAlumno);
}

//Registro de alumnos
function registrarAlumnos() {
  let confirmacion = confirm(
    "Ingreso " + alumnosInscriptos + " alumnos inscriptos. Es Correcto?"
  );

  console.log(confirmacion);

  if (confirmacion) {
    for (let i = 0; i < alumnosInscriptos; i++) {
      let nombre = prompt("Ingrese el nombre del alumno");
      let apellido = prompt("Ingrese apellido del alumno");
      let edad = prompt("Ingrese la edad");

      nuevoAlumno = new Alumnos(nombre, apellido, edad);
      agregarAlumnos();
      console.log(nuevoAlumno);
      console.log(listaAlumnos);
    }
  } else {
    alert("Tiene 48 hs para cargar los alumnos, no lo olvide.");
  }
}

function alertaAlumnosRegistrados() {
  
  while (alumnosInscriptos >= 0) {
    if (alumnosInscriptos < espacioMaximo) {
      let resultado = diferencia(espacioMaximo, alumnosInscriptos);
      alert(
        `Se registraron los alumnos con exito cuenta con espacio suficiente para agregar ${resultado} alumnos a la clase`
      );
      break;
    } else if (alumnosInscriptos > espacioMaximo) {
      let resultado = diferencia(alumnosInscriptos, espacioMaximo);
      alert(
        `Los alumnos se registraon con exito pero tiene demaciados alumnos inscriptos para esta clase, debera reasignar camada para ${resultado} alumnos`
      );
      break;
    } else if (alumnosInscriptos === 0) {
      alert("Cuenta con espacio para 10 alumnos");
    } else {
      alert("Excelente!!... el aula esta completa.");
      break;
    }
  }
}

//ordenar alumnos por apellido
function orderAlumnos() {
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
  });
}

//mostrar Login
const openLogin = document.getElementById('btnLogin');
const modalLogin = document.getElementById('loginPage');
const closeWindow = document.getElementById('close');
const closeWindow2 = document.getElementById('close2');


openLogin.addEventListener('click', ()=>{
  modalLogin.classList.add('show');
})

closeWindow.addEventListener('click', ()=>{
  modalLogin.classList.remove('show');
})

closeWindow2.addEventListener('click', ()=>{
  modalLogin.classList.remove('show');
})

//rotar tarjeta Login
const loginTeacher = document.getElementById('studentUsers');
const loginCard = document.getElementById('formLogin');
const loginStudent = document.getElementById('teacherUsers');

loginTeacher.addEventListener('click', ()=>{
  loginCard.classList.add('rotate');
})

loginStudent.addEventListener('click', ()=>{
  loginCard.classList.remove('rotate');
})
