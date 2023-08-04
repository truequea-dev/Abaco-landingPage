import axios from 'axios';

document.querySelector(".reg").addEventListener("click", () => {
    let n_celular = document.querySelector(".n_celular").value
    let correo = document.querySelector(".correo").value
    let password = document.querySelector(".password").value
    if (n_celular == "" || correo == "" || password == "") {
        return alert("Todos los campos son obligatorios");
                
    }
    if (!esEmailValido(correo)) {
        return alert("El correo no es válido");       
    }
    if (password.length < 6) {
        return alert("La contraseña debe ser mayor a 5 carácteres");
    }
    let data = {
        nombre_usuario: "",
        clave : password,
        correo_usuario: correo,
        telefono_usuario: n_celular,
    }
    register(data)
})

async function register(data){
    try {
        let res = await axios.post("http://localhost:5000/api/v1/register", data)
        console.log(res);
        return alert("Usuario registrado correctamente");
    } catch (error) {
        console.error(error);
    }
}



function esEmailValido(email) {
    let mailValido = false;
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(EMAIL_REGEX)){
      mailValido = true;
    }
    return mailValido;
  }