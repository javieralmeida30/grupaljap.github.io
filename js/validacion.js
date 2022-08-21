function showAlertSuccess() {
    correcto.classList.add("show");
}

function showAlertError() {
    error.classList.add("show");
}
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const contrasena = document.getElementById("password1")
const contrasena2 = document.getElementById("password2")
const aceptarTerminos = document.getElementById("terminos")
const registro = document.getElementById("registro")
const error =  document.getElementById("alert-danger")
const correcto = document.getElementById("alert-success")
