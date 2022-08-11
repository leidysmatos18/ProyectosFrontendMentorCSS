window.addEventListener("load", () => {
  const form = document.getElementById("formulario")
  const firstName = document.getElementById("name");
  const lastName = document.getElementById("last-name");
  const addressEmail = document.getElementById("email");
  const passwordSecret = document.getElementById("password");

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    validaCampos()
  })

  const validaCampos = () => {
    const firstNameValor = firstName.value.trim();
    const lastNameValor = lastName.value.trim();
    const addressEmailValor = addressEmail.value.trim();
    const passwordSecretValor = passwordSecret.value.trim();
    
    if(!firstNameValor) {
      console.log("campo vacio ")
      validaFalla(firstNameValor, "First Name cannot be empty")
    }else {
      validaOK(firstNameValor)
    }
  }
  const validaFalla = (input, msje) => {
    const inputContainer = input.parentElement
    console.log(inputContainer)
    const aviso = document.querySelector(".messageName")
    const imgAviso = document.querySelectorAll(".alerta")

    aviso.innerText = msje
    aviso.classList.replace("spanAlert, spanAlertOff") 

    imgAviso.classList.replace("alerta, alertaOff")
  }

  const validaOK = (input, msje) => {
    const inputContainer = input.parentElement
    console.log(inputContainer)
    inputContainer.classList.add("inputs")
  }
})