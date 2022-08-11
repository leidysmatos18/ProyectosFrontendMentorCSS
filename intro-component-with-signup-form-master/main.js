const inputName = document.getElementById("name");
const inputLastName = document.getElementById("last-name");
const inputAddress = document.getElementById("email");
const inputPassword = document.getElementById("password");
const button = document.getElementById("button-form");
const form = document.getElementById("formulario")
const aviso = document.querySelectorAll(".spanAlert");
const imgAlerta = document.querySelectorAll(".alerta");
const inputs = document.querySelectorAll("inputs")


function validarDatos(nombre, apellido, correo, clave) {

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; 

  if(nombre === "" || nombre !== "string" || nombre.length < 3) {
    return false;
  }

  if(apellido === "" || apellido !== "string" || apellido.length < 3) {
    return false;
  }

  if(correo === "" || !regexEmail.test(correo.value)) {
    return false
  }

  if(clave === "" || clave.length < 8) {
    return false
  }
}


function clickBoton(){

  const name = inputName?.value;
  const lastNamee = inputLastName?.value;
  const email = inputAddress?.value;
  const password = inputPassword?.value;

  let res = validarDatos(name, lastNamee, email, password)

  if(res === false) {
    console.log("Error en el Formulario")

    aviso.classList.replace("spanAlert", "spanAlertOff");
    imgAlerta.classList.replace("alerta", "alertaOff");
    inputs.classList.replace("inputs", "inputAlert")

     return 
  };
}




// if(!singIn) {
//   // aviso.classList.toggle("spanAlertOff")
//   aviso.classList.replace("spanAlert", "spanAlertOff");

//   // imgAlerta.classList.toggle("alertaOff")
//   imgAlerta.classList.replace("alerta", "alertaOff");

// }

button.addEventListener("click", clickBoton)



