window.addEventListener("load", () => {
  const form = document.getElementById("formulario")
  const firstName = document.getElementById("name");
  const lastname = document.getElementById("lastname");
  const addressEmail = document.getElementById("email");
  const passwordSecret = document.getElementById("password");

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    validarCampos()
  })

  const validarCampos = () => {
    const firstNameValor = firstName.value.trim();
    const lastnameValor = lastname.value.trim();
    const addressEmailValor = addressEmail.value.trim();
    const passwordSecretValor = passwordSecret.value.trim();

    const textoSinNumero = /^[A-Za-z]+$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
    //validacion del nombre
    if (!firstNameValor) {
      validarError(firstName, "First Name cannot be empty")
    } else if (firstNameValor.length < 3) {
      validarError(firstName, "First Name cannot be less than 3 characters")
    } else if (!textoSinNumero.test(firstNameValor)) {
      validarError(firstName, "First Name cannot have any numbers")
    } else {
      validacionExitosa(firstName)
    }

    //validacion del apellido
    if (!lastnameValor) {
      validarError(lastname, "Last name cannot be empty")
    } else if (!textoSinNumero.test(lastnameValor)) {
      validarError(lastname, "Last Name cannot have any numbers")
    } else {
      validacionExitosa(lastname)
    }

    //validacion del Correo
    if(!addressEmailValor) {
      validarError(addressEmail, "Looks like this is not an Email")
    } else if(!regexEmail.test(addressEmailValor)) {
      validarError(addressEmail, "Looks like this is not an Email"); 
    }else {
      validacionExitosa(addressEmail)
    }

    //validacion de la contraseña
    if(!passwordSecretValor) {
      validarError(passwordSecret, "Password cannot be empty")
    } else if(passwordSecretValor.length < 8) {
      validarError(passwordSecret, "Password cannot be less than 8 characters")
    }else {
      validacionExitosa(passwordSecret)
    }
  }
  
  const validarError = (input, mensaje) => {
    const aviso = input.nextElementSibling.nextElementSibling;
      aviso.innerText = mensaje
      aviso.classList.replace("spanAlert", "spanAlertOff") 

    const imgAviso = input.nextElementSibling
      imgAviso.classList.replace("alerta", "alertaOff");
      
    input.classList.replace("inputs", "inputAlert")
  }

  const validacionExitosa = (input, mensaje) => {
    const aviso = input.nextElementSibling.nextElementSibling;
      aviso.innerText = mensaje
      aviso.classList.replace("spanAlertOff", "spanAlert") 

    const imgAviso = input.nextElementSibling
      imgAviso.classList.replace("alertaOff", "alerta")

    input.classList.replace("inputAlert", "inputs")
  }
})