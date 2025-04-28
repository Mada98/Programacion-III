const botonResaltar = document.getElementById("botonRes")
const botonOcultar = document.getElementById("botonOcu")
const parrafos = document.querySelectorAll(".parrafo")

botonResaltar.addEventListener("click", function () {
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].classList.add('resaltado')
    }
})

botonOcultar.addEventListener("click", function () {
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].classList.toggle('oculto')
    }
})