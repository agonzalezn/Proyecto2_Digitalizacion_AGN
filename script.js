// Intentamos cargar el estado guardado, o usamos el valor por defecto
let marcador = JSON.parse(localStorage.getItem('marcadorVoley')) || {
    local: { puntos: 0, sets: 0 },
    visitante: { puntos: 0, sets: 0 }
};

// Referencias a elementos del DOM
const elPuntosLocal = document.getElementById('puntosLocal');
const elSetsLocal = document.getElementById('setsLocal');
const elPuntosVisitante = document.getElementById('puntosVisitante');
const elSetsVisitante = document.getElementById('setsVisitante');
const inputsNombres = document.querySelectorAll('.nombre-equipo');

// Cargar nombres guardados si existen
if(localStorage.getItem('nombreLocal')) inputsNombres[0].value = localStorage.getItem('nombreLocal');
if(localStorage.getItem('nombreVisitante')) inputsNombres[1].value = localStorage.getItem('nombreVisitante');

// Escuchar cambios en los nombres para guardarlos también
inputsNombres[0].addEventListener('input', (e) => localStorage.setItem('nombreLocal', e.target.value));
inputsNombres[1].addEventListener('input', (e) => localStorage.setItem('nombreVisitante', e.target.value));

function actualizarPantalla() {
    elPuntosLocal.textContent = marcador.local.puntos < 10 ? '0' + marcador.local.puntos : marcador.local.puntos;
    elPuntosVisitante.textContent = marcador.visitante.puntos < 10 ? '0' + marcador.visitante.puntos : marcador.visitante.puntos;
    elSetsLocal.textContent = marcador.local.sets;
    elSetsVisitante.textContent = marcador.visitante.sets;

    // --- NUEVO: GUARDAR EN CADA CAMBIO ---
    // Convertimos el objeto a texto (JSON) y lo guardamos
    localStorage.setItem('marcadorVoley', JSON.stringify(marcador));
}

function sumarPunto(equipo) {
    if (equipo === 'local') {
        marcador.local.puntos++;
    } else {
        marcador.visitante.puntos++;
    }
    actualizarPantalla();
}

function restarPunto(equipo) {
    if (equipo === 'local' && marcador.local.puntos > 0) {
        marcador.local.puntos--;
    } else if (equipo === 'visitante' && marcador.visitante.puntos > 0) {
        marcador.visitante.puntos--;
    }
    actualizarPantalla();
}

function sumarSet(equipo) {
    if(!confirm("¿Confirmar que " + equipo.toUpperCase() + " ganó el set?")) return;

    if (equipo === 'local') {
        marcador.local.sets++;
    } else {
        marcador.visitante.sets++;
    }
    
    marcador.local.puntos = 0;
    marcador.visitante.puntos = 0;
    
    actualizarPantalla();
}

function reiniciarPartido() {
    if(!confirm("¿Reiniciar todo el partido?")) return;
    
    marcador.local.puntos = 0;
    marcador.local.sets = 0;
    marcador.visitante.puntos = 0;
    marcador.visitante.sets = 0;
    
    inputsNombres[0].value = "LOCAL";
    inputsNombres[1].value = "VISITA";

    // --- NUEVO: BORRAR MEMORIA ---
    localStorage.removeItem('marcadorVoley');
    localStorage.removeItem('nombreLocal');
    localStorage.removeItem('nombreVisitante');

    actualizarPantalla();
}

// Inicializar al cargar la página
actualizarPantalla();