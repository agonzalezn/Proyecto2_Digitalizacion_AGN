// Cargar estado guardado o defecto
let marcador = JSON.parse(localStorage.getItem('marcadorVoley')) || {
    local: { puntos: 0, sets: 0 },
    visitante: { puntos: 0, sets: 0 }
};

// Referencias al DOM
const elPuntosLocal = document.getElementById('puntosLocal');
const elSetsLocal = document.getElementById('setsLocal');
const elPuntosVisitante = document.getElementById('puntosVisitante');
const elSetsVisitante = document.getElementById('setsVisitante');
const inputsNombres = document.querySelectorAll('.team-name-input'); 

// Cargar nombres
if(localStorage.getItem('nombreLocal')) inputsNombres[0].value = localStorage.getItem('nombreLocal');
if(localStorage.getItem('nombreVisitante')) inputsNombres[1].value = localStorage.getItem('nombreVisitante');

// Escuchar cambios nombres
inputsNombres[0].addEventListener('input', (e) => localStorage.setItem('nombreLocal', e.target.value));
inputsNombres[1].addEventListener('input', (e) => localStorage.setItem('nombreVisitante', e.target.value));

function actualizarPantalla() {
    // Formato 00
    elPuntosLocal.textContent = marcador.local.puntos < 10 ? '0' + marcador.local.puntos : marcador.local.puntos;
    elPuntosVisitante.textContent = marcador.visitante.puntos < 10 ? '0' + marcador.visitante.puntos : marcador.visitante.puntos;
    
    elSetsLocal.textContent = marcador.local.sets;
    elSetsVisitante.textContent = marcador.visitante.sets;

    // Guardar estado actual
    localStorage.setItem('marcadorVoley', JSON.stringify(marcador));
}

function sumarPunto(equipo) {
    if (equipo === 'local') marcador.local.puntos++;
    else marcador.visitante.puntos++;
    actualizarPantalla();
}

function restarPunto(equipo) {
    if (equipo === 'local' && marcador.local.puntos > 0) marcador.local.puntos--;
    else if (equipo === 'visitante' && marcador.visitante.puntos > 0) marcador.visitante.puntos--;
    actualizarPantalla();
}

function sumarSet(equipo) {
    if(!confirm("¿Confirmar SET para " + equipo.toUpperCase() + "?")) return;

    if (equipo === 'local') marcador.local.sets++;
    else marcador.visitante.sets++;
    
    // Reset puntos al cambiar set
    marcador.local.puntos = 0;
    marcador.visitante.puntos = 0;
    actualizarPantalla();
}

function reiniciarPartido() {
    if(!confirm("¿Terminar partido y guardar resultado?")) return;
    
    // --- LÓGICA DE HISTORIAL ---
    const historial = JSON.parse(localStorage.getItem('voley_historial')) || [];
    const nuevoPartido = {
        fecha: new Date().toLocaleDateString(),
        local: inputsNombres[0].value,
        visitante: inputsNombres[1].value,
        setsL: marcador.local.sets,
        setsV: marcador.visitante.sets
    };
    historial.unshift(nuevoPartido); // Añadir al principio
    localStorage.setItem('voley_historial', JSON.stringify(historial));
    // ---------------------------

    // Resetear variables
    marcador.local.puntos = 0; marcador.local.sets = 0;
    marcador.visitante.puntos = 0; marcador.visitante.sets = 0;
    
    inputsNombres[0].value = "LOCAL";
    inputsNombres[1].value = "VISITA";

    // Borrar datos temporales, pero mantener historial
    localStorage.removeItem('marcadorVoley');
    localStorage.removeItem('nombreLocal');
    localStorage.removeItem('nombreVisitante');

    actualizarPantalla();
}

// Iniciar
actualizarPantalla();