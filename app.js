const nosotros = document.getElementById('nosotros');
const ventana = document.getElementById('ventana-popup');
const botonUnete = document.getElementById('boton-unete')
const sectionWords = document.getElementById('span-words');

window.onload = () => {
  sectionWords.style.display = "none";
};

function mostrarVentana() {
  ventana.classList.toggle('hidden');
}

function arrancaAnimacion() {
  console.log('Enterthedragon');
  sectionWords.style.display = "flex";
}

nosotros.addEventListener('click', mostrarVentana);

botonUnete.addEventListener('mouseenter', arrancaAnimacion);