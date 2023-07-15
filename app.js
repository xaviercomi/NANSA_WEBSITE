const nosotros = document.getElementById('nosotros');
const ventana = document.getElementById('ventana-popup');
const botonUnete = document.getElementById('boton-unete')
const sectionWords = document.getElementById('span-words');

window.onload = () => {
  sectionWords.style.display = "none";
};

function muestraVentana() {
  ventana.classList.toggle('hidden');
}

function empiezaAnimacion() {
  sectionWords.style.display = "flex";
}

function muestraPortafolio() {
  menuPortafolio.classList.toggle('hidden');
}

function muestraDownload() {
  menuDownload.classList.toggle('hidden');
}

nosotros.addEventListener('click', muestraVentana);

botonUnete.addEventListener('click', empiezaAnimacion);
