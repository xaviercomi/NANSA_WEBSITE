const nosotros = document.getElementById('nosotros');
const ventana = document.getElementById('ventana-popup');
const botonUnete = document.getElementById('boton-unete');
const sectionWords = document.querySelector('.words');
const wordsSpan = document.getElementById('span-words');

function muestraVentana() {
  ventana.classList.toggle('hidden');
}

function empiezaAnimacion() {
  sectionWords.style.display = "flex";
  wordsSpan.style.animationPlayState = "running";
}

nosotros.addEventListener('click', muestraVentana);

botonUnete.addEventListener('mouseover', empiezaAnimacion);
