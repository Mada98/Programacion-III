const inputTexto = document.getElementById("inputText")
const botonAgregar = document.getElementById("boton")
const lista = document.getElementById("lista")

botonAgregar.addEventListener('click', function(){
    const text = inputTexto.value.trim()
    if (text === "") return;

    const nuevoLi = document.createElement("li")
    nuevoLi.textContent = text

    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"
    botonEliminar.className = "botonEliminar"

    botonEliminar.addEventListener("click", function(){
        lista.removeChild(nuevoLi)
    })

    nuevoLi.appendChild(botonEliminar)
    lista.appendChild(nuevoLi)

    inputTexto.value = ""
})