const nosotros = document.getElementById('nosotros');
const ventana = document.getElementById('ventana-popup');
const botonUnete = document.getElementById('boton-unete');
const sectionWords = document.querySelector('.words');
const wordsSpan = document.getElementById('span-words');
const resource = document.getElementById('resources');
const portafolio = document.getElementById('portafolio');
const download = document.getElementById('download');
const downloadCV = document.getElementById('download-cv');

function muestraVentana() {
  ventana.classList.toggle('hidden');
}

function empiezaAnimacion() {
  sectionWords.style.display = "flex";
  wordsSpan.style.animationPlayState = "running";
}

function cierraVentana() {

  if (ventana.classList.value = 'popup') {
    ventana.classList.toggle('hidden');
  }

}

function enterPassword() {


}


nosotros.addEventListener('click', muestraVentana);

botonUnete.addEventListener('mouseover', empiezaAnimacion);

resource.addEventListener('mouseover', cierraVentana);

portafolio.addEventListener('mouseover', cierraVentana);

download.addEventListener('mouseover', cierraVentana);

downloadCV.addEventListener('click', enterPassword);