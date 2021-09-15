
profeLog = sessionStorage.getItem('profeLog')

$('#userLogin').prepend(`<h2> Bienvenido Profesor ${profeLog} </h2>`);

$('#btnLogout').click( ()=>{
    sessionStorage.clear()
    window.location.href = "../index.html"
})