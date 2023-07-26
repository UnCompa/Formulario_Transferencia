const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
  nombre: /^[a-zA-Z0-9\_\-\ ]{4,16}$/,
  correo: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
  money:/^[0-9\.]{1,10}$/
}
const campos = {
  nombre: false,
  correo: false,
  money: false
}

const validarFormulario = (e)=>{
  switch (e.target.name) {
    case "name":
      comprobarCampo(expresiones.nombre, e.target, "Nombre")
    break;
    case "email":
      comprobarCampo(expresiones.correo, e.target, "Email")
    break;
    case "money":
      comprobarCampo(expresiones.money, e.target, "Cantidad")
    break;
    }
}
const comprobarCampo = (expresion,input,campo)=>{
  if (expresion.test(input.value)){
    document.getElementById(`${campo}`).classList.remove("formulario__input--invalido")
    document.getElementById(`${campo}`).classList.add("formulario__input--valido")
    campos[campo] = true
  } else {
    document.getElementById(`${campo}`).classList.add("formulario__input--invalido")
    document.getElementById(`${campo}`).classList.remove("formulario__input--valido")
    campos[campo] = false
  }
}
inputs.forEach((input)=>{
  input.addEventListener("keyup", validarFormulario)
  input.addEventListener("blur", validarFormulario)
})

formulario.addEventListener('submit', (e)=>{
  e.defaultPrevented()
  if(campos.nombre && campos.correo && campos.asunto && campos.area)
    formulario.reset();
})