import axios from 'axios';

document.querySelector(".reg").addEventListener("click", () => {
    let empresa = document.querySelector(".empresa").value
    let nombre = document.querySelector(".nombre").value
    let cargo = document.querySelector(".cargo").value
    let celular = document.querySelector(".celular").value
    let email = document.querySelector(".email").value
    if (empresa == "" || nombre == "" || cargo == "" || celular == "" || email == "") {
        return alert("Todos los campos son obligatorios");
                
    }
    if (!esEmailValido(email)) {
        return alert("El correo no es válido");       
    }
    let data = {
        empresa,
        nombre,
        cargo,
        celular,
        email
    }
    register(data)
})

async function register(data){
    try {
        let res = await axios.post("http://localhost:3000/registrate", data)
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