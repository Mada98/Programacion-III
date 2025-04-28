const titulo = document.getElementById("tituloPrincipal")
titulo.textContent = "Mi Pagina web Modificada"

const parrafos = document.getElementsByClassName("parrafo")
for(let i = 0; i < parrafos.length; i++){
    parrafos[i].style.color = "red"
}

const elem = document.querySelectorAll("li")
for(let i = 0; i < elem.length;i++ ){
    elem[i].textContent = "elemento modificado"
}