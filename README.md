# 🏐 VoleyPro

VoleyPro es una aplicación web para llevar el marcador y la táctica de tus partidos de voleibol directamente desde tu móvil u ordenador.

* No requiere instalación
* No necesita conexión a internet para usar el marcador
* Todos los datos de los partidos se guardan localmente en tu dispositivo

---

## 📥 Cómo usar la aplicación

A diferencia de otras aplicaciones, no necesitas descargar ningún archivo `.exe`. VoleyPro funciona directamente en tu navegador web.

### 🔹 Paso 1 – Descargar el código

1. Entra en este repositorio.
2. Pulsa en el botón verde **`<> Code`** arriba a la derecha.
3. Selecciona **Download ZIP**.
4. Extrae (descomprime) la carpeta en tu Escritorio o donde prefieras.

![WhatsApp Image 2026-03-03 at 12 55 05](https://github.com/user-attachments/assets/a0b0e212-8016-435d-b701-45e47e20420c)


### 🔹 Paso 2 – Ejecutar la App

1. Entra en la carpeta que acabas de descomprimir.
2. Haz doble clic en el archivo `index.html`.
3. ¡Listo! Se abrirá automáticamente en tu navegador por defecto (Chrome, Safari, Edge...) y ya puedes empezar a usarla.

---

## ⚠️ MUY IMPORTANTE – El guardado de datos

Antes de empezar a guardar partidos, debes saber cómo funciona la memoria de la aplicación:

VoleyPro **no usa servidores en la nube**. Utiliza una tecnología de tu navegador llamada `LocalStorage` para guardar el historial de partidos y los nombres de los equipos. 

**¿Por qué es importante saber esto?**
* Tus datos son **100% privados**, nadie más puede verlos.
* Si juegas un partido, cierras la pestaña por error y vuelves a abrirla, **el marcador seguirá ahí**.
* 🚨 **Cuidado:** Si borras los datos de navegación, las cookies o la caché de tu navegador de forma completa, **borrarás tu historial de partidos**.

---

## 🚀 Cómo usar VoleyPro

### 1️⃣ El Marcador (En vivo)
* Toca encima de "LOCAL" o "VISITA" para poner los nombres reales de los equipos.
* Usa el botón gigante **`+`** para ir sumando puntos.
* Si te equivocas, usa el botón **`-1`**.
* Cuando un equipo llegue a 25 puntos (o 15 en el tie-break), pulsa **`SET 🏆`**.
* Al terminar el encuentro, pulsa en **`🔄 Finalizar Partido y Guardar Acta`**.

### 2️⃣ Historial y Estadísticas
En el menú inferior, pulsa el icono del pergamino (📜):
* Verás un resumen visual de tus victorias y tu porcentaje de éxito (Win Rate).
* Tendrás la lista completa de todos los partidos que has guardado.
* Puedes vaciar la lista entera usando el botón de borrar.

### 3️⃣ Táctica y Entrenamientos
En los iconos de posición (📍) y brazo (💪):
* Consulta las 6 zonas de rotación.
* Repasa qué hace exactamente cada jugador (Líbero, Colocador, Central, Opuesto).
* Accede a una masterclass en vídeo para mejorar tu técnica de salto, recepción y saque.

---

## 💻 Requisitos

* Funciona en Windows, macOS, Linux, Android e iOS.
* Solo necesitas un navegador web moderno (se recomienda Chrome, Firefox o Safari).
* No necesitas instalar bases de datos, ni librerías adicionales.

---

## 📁 Estructura del proyecto

Si eres desarrollador o profesor, así está estructurado el código:

* `index.html` → El panel principal y marcador.
* `historial.html` → Lógica de la tabla de registros.
* `posiciones.html` → Explicación visual de táctica y zonas.
* `entrenamientos.html` → Biblioteca multimedia.
* `style.css` → Diseño moderno tipo *Glassmorphism*.
* `script.js` → Lógica matemática del marcador y guardado en `LocalStorage`.
