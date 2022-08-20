const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const contraseña = document.getElementById("password1")
const repetir_contraseña = document.getElementById("password2")
const terminos = document.getElementById("terminos")
const form = document.getElementById("form")

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}