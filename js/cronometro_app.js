const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

let [segundos, minutos, horas] = [0, 0, 0];

let intervaloDeTiempo;
let estadoCronometro = 'pausado';

// Funciones
function actualizarCronometro() {
  segundos++;
  console.log(segundos);
  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }

  }

  // Agregar un cero a la izquierda si es necesario;
  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  // actualizar el cronometro
  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
};

// Agregar un cero a la izquierda sie es necesario
function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}

// EventListener botones
botonInicioPausa.addEventListener('click', function () {
  if (estadoCronometro === 'pausado') {
    // Llamar a la funcion actualizarCronometro cada 1000 milisegundos
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonInicioPausa.classList.remove('iniciar');
    botonInicioPausa.classList.add('pausar');
    estadoCronometro = 'andando';

  } else {
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill">';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';
  }
});

botonReiniciar.addEventListener('click', function () {
  window.clearInterval(intervaloDeTiempo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  cronometro.innerText = '00:00:00';
  botonInicioPausa.innerHTML = '<i class="bi bi-play-fill">';
  botonInicioPausa.classList.remove('pausar');
  botonInicioPausa.classList.add('iniciar');
  estadoCronometro = 'pausado';

});
