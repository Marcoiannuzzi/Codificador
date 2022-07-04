// Variables

const mensaje = document.getElementById("mensaje")
const codigo = document.getElementById("codigo")
const codificar = document.getElementById("codificar")
const descodificar = document.getElementById("descodificar")

// Codigo

const mensajeACodigo = (texto) => {
    let vocalA= texto.replaceAll("a", "krsd")
    let vocalE= vocalA.replaceAll("e", "mjhn")
    let vocalI= vocalE.replaceAll("i", "lkyh")
    let vocalO= vocalI.replaceAll("o", "drfc")
    let vocalU= vocalO.replaceAll("u", "vbnm")
    return vocalU.toLowerCase()
}

const codigoAMensaje = (texto) => {
    let vocalA= texto.replace(new RegExp("krsd", "ig"), "a")
    let vocalE= vocalA.replace(new RegExp("mjhn", "ig"), "e")
    let vocalI= vocalE.replace(new RegExp("lkyh", "ig"), "i")
    let vocalO= vocalI.replace(new RegExp("drfc", "ig"), "o")
    let vocalU= vocalO.replace(new RegExp("vbnm", "ig"), "u")
    return vocalU.toLowerCase()
}
   
codificar.addEventListener("click", (e)=>{
    codigo.value=mensajeACodigo(mensaje.value)
    mensaje.value=""
})


descodificar.addEventListener("click", (e)=>{
    mensaje.value=codigoAMensaje(codigo.value)
    codigo.value=""
})

