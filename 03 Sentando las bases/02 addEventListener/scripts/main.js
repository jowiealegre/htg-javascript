
const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const alerta = document.querySelector ('#alerta-error');
const enviado = document.querySelector ('#enviado');
const texto = document.querySelector ('#texto');
const texto2 = document.querySelector ('#input-solucion');


function recibirNombre(event) {
  event.preventDefault();
  console.log(event);
  enviado.innerText = 'formulario enviado';
  texto.innerText = inputNombre.value+ '' + input-solucion.value


}

function interceptarNombre(event) {
  let nombre = event.target.value;
  console.log(nombre);
  if (nombre.lenght <= 4 || nombre.lenght >50){
  alerta.innerText = 'El nombre debe ser entre 5 y 50 caracteres';
  alerta.style.color = 'red'; 
  }
  else{
    alerta.innerText = '';
  } 
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
