const listaTareas = document.getElementById("contenedor-lista")
const inputTexto = document.getElementById("inputText")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(e){
    e.preventDefault()
    texto = inputTexto.value.trim()
    nuevoLi = document.createElement("li")
    nuevoLi.textContent = texto
    nuevoLi.addEventListener("click", function(){
        nuevoLi.classList.toggle("completado")
    })
    listaTareas.appendChild(nuevoLi)
    inputTexto.value = ""
    inputTexto.focus()
})
