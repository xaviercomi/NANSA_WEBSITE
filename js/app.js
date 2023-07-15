const nosotros = document.getElementById('nosotros');
const ventana = document.getElementById('ventana-popup');
const botonUnete = document.getElementById('boton-unete')
const sectionWords = document.getElementById('span-words');

window.addEventListener('load', () => {
  sectionWords.style.animationDelay = "7s";
  sectionWords.style.display = "none";
});

function muestraVentana() {
  ventana.classList.toggle('hidden');
}

function empiezaAnimacion() {
  sectionWords.style.display = "flex";
}

nosotros.addEventListener('click', muestraVentana);

botonUnete.addEventListener('mouseover', empiezaAnimacion);
