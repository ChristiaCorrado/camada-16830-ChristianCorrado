const asignatura =['Matematica','Biologia','Educacion Fisica','Tecnologia','Literatura','Musica','Historia','Geografia','Quimica','Fisica'];
const listaAlumnos = [];
const listaProfesor = [];
const dias = ['lunes','martes','miercoles','jueves','viernes']

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



// URLBASE : https://api.mercadopago.com
// ENDPOINT: /checkout/preferences
// URL COMPLETA: https://api.mercadopago.com/checkout/preferences 

//https://api.mercadolibre.com//sites/MLA/search?q=



const datosDePagoMensual ={"items": [
  {
    "title": "Cuota Mensual Instituto",
    "description": "Cuota mensual del instituto, conserve el comprobante",
    "picture_url": "",
    "category_id": "",
    "quantity": 1,
    "currency_id": "ARS",
    "unit_price": 6000
}]}

const datosDePagoAnual ={"items": [
  {
    "title": "Cuota Mensual Instituto",
    "description": "Cuota mensual del instituto, conserve el comprobante",
    "picture_url": "",
    "category_id": "",
    "quantity": 1,
    "currency_id": "ARS",
    "unit_price": 62000
}]}



const URLAPI = 'https://api.mercadopago.com/checkout/preferences'

const pagar = (opcion)=>{


  let datosDePago = opcion

   $.ajaxSetup({
     headers:{
      'Authorization': 'Bearer TEST-2474027924977875-091801-56a9203923183a74988c2cc07db8b4b9-140873259',
      'Content-Type': 'application/json'
    }
  })
  
  $.post(URLAPI,JSON.stringify(datosDePago),(respuesta, status) => {
    urlPago = respuesta.init_point
    window.open(`${urlPago}`);
  })
  
}
