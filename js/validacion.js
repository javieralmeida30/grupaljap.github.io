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
function todoCorrecto(event){
    event.preventDefault();
    if(nombre.value=== ""){
        return showAlertError();
    }
    if(apellido.value===""){
    return showAlertError();
    }
    if(email.value===""){
    return showAlertError();
    }
    if(contrasena.value.length < 6){
    return showAlertError();
    }
    if(contrasena2.value != contrasena.value){
        return showAlertError();
    }
    if(!aceptarTerminos.checked){
    return showAlertError();
    } 
    if(nombre.value.length>0 &&
        apellido.value.length>0 &&
        email.value.length>0 &&
        contrasena.value.length>=6 &&
        contrasena2.value.length>=6 &&
        contrasena.value===contrasena2.value &&
        aceptarTerminos.checked){
            return showAlertSuccess();
        }
}
