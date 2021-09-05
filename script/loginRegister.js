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

//mostrar Register
const openRegister = document.getElementById('btnRegister');
const modalRegister = document.getElementById('registerPage');
const closeWindowR = document.getElementById('closeRegister');



openRegister.addEventListener('click', ()=>{
  modalRegister.classList.add('show');
})

closeWindowR.addEventListener('click', ()=>{
  modalRegister.classList.remove('show');
})



