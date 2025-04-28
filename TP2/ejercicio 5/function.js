const inputNombre = document.getElementById("inputNom")
const inputEmail = document.getElementById("inputEma")
const inputEdad = document.getElementById("inputEda")
const errorNombre = document.getElementById("errorNom")
const errorEmail = document.getElementById("errorEma")
const errorEdad = document.getElementById("errorEda")
const formulario = document.getElementById("formulario")
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
formulario.addEventListener("submit", function(e){
    e.preventDefault()

    let nombre = inputNombre.value.trim()
    if (nombre === ""){
        errorNombre.textContent = "Error, no ingreso un Nombre"
        return;
    }
    errorNombre.textContent = ""

    let email = inputEmail.value.trim()
    if (!regex.test(email)){
        errorEmail.textContent = "Error, no ingreso un email valido"
        return;
    }
    errorEmail.textContent = ""

    let edad = Number(inputEdad.value.trim())
    if (isNaN(edad)){
        errorEdad.textContent = "Error, no ingreso una edad valida"
        return;
    }
    if (edad < 18){
        errorEdad.textContent = "Error, es menor de edad"
        return;
    }
    alert("Se envio todo correctamente")
    errorEdad.textContent = ""
})