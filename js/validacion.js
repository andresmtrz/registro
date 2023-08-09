const boton = document.getElementById('regBtn')

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function esCorrecta(){
    debugger
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const estadoCheckbox = document.getElementById('terminos').checked;

    if((nombre.length > 0) && (apellido.length > 0) && (email.length > 0) && (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) && (password1.length >= 6) && (password1 == password2)  && estadoCheckbox) {
        showAlertSuccess()
    }else{showAlertError()}
}

boton.addEventListener('click',esCorrecta);