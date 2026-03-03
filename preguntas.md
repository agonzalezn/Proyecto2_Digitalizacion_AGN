# Reflexión sobre Tecnologías Habilitadoras - VoleyPro

A continuación, se responden las preguntas planteadas sobre la implicación de las Tecnologías Habilitadoras Digitales (THD), la gestión del dato y la seguridad en el proyecto VoleyPro.

### 1. Ciclo de vida del dato (5b)
**¿Cómo se gestionan los datos desde su generación hasta su eliminación en tu proyecto?**
El ciclo de vida en VoleyPro comienza con la **generación** de datos a través de la interacción del usuario con la interfaz (botones de sumar puntos, sets y nombres de equipos). Estos datos se procesan en tiempo real mediante JavaScript y se **almacenan** de forma persistente en el navegador usando `LocalStorage`. La **eliminación** queda en manos del usuario, quien puede purgar todo el historial y reiniciar el sistema mediante el botón "Borrar Todo" en la vista de historial.

**¿Qué estrategia sigues para garantizar la consistencia e integridad de los datos?**
La consistencia se garantiza mediante validaciones lógicas en el código (`script.js`). Por ejemplo, hay controles que impiden que los puntos sean negativos y cuadros de diálogo (`confirm`) que obligan al usuario a confirmar acciones críticas (como sumar un set o finalizar un partido) para evitar sobreescrituras accidentales.

---

### 2. Almacenamiento en la nube (5f)
**¿Qué alternativas consideraste para almacenar datos y por qué elegiste tu solución actual?**
Actualmente, VoleyPro **no utiliza la nube**, sino que opta por el almacenamiento local (`LocalStorage`). Se tomó esta decisión priorizando la **disponibilidad**: muchos pabellones deportivos tienen muy mala cobertura a internet. Al guardar los datos localmente, la aplicación funciona perfectamente sin conexión (modo *offline*).

**Si no usas la nube, ¿cómo podrías integrarla en futuras versiones?**
En el futuro, se podría integrar una base de datos en tiempo real en la nube (como *Firebase Realtime Database* o *Supabase*). Esto permitiría generar un enlace público para que los espectadores o familiares del equipo local puedan ver el marcador actualizándose en directo desde sus propios teléfonos móviles, en cualquier lugar del mundo.

---

### 3. Seguridad y regulación (5i)
**¿Qué medidas de seguridad implementaste para proteger los datos o procesos en tu proyecto?**
Dado que la aplicación funciona en el lado del cliente (Frontend), la seguridad se basa en la privacidad por diseño. No existen bases de datos externas que puedan ser hackeadas, ya que todo reside en el dispositivo físico del usuario.

**¿Qué normativas (e.g., GDPR) podrían afectar el uso de tu software y cómo las has tenido en cuenta?**
El software cumple rigurosamente con el RGPD (GDPR) ya que **no recopila Información Personal Identificable (PII)**. El uso de la aplicación es anónimo y no requiere registro. En el archivo `legal.html` se ha incluido una política de privacidad y cookies que informa transparentemente al usuario de que el ciclo del dato empieza y termina en su propio ordenador.

**Si no implementaste medidas de seguridad, ¿qué riesgos potenciales identificas y cómo los abordarías en el futuro?**
Si en un futuro la aplicación permitiera crear perfiles de clubes, subir fotos de jugadores o guardar datos en la nube, el riesgo de filtración de datos aumentaría. En ese caso, habría que implementar autenticación segura (OAuth 2.0), cifrado de contraseñas y conexiones HTTPS en el servidor.

---

### 4. Implicación de las THD en negocio y planta (2e)
**¿Qué impacto tendría tu software en un entorno de negocio o en una planta industrial?**
Aunque VoleyPro está enfocado al deporte, en un contexto de "negocio" (un club deportivo o liga municipal), el impacto es la **digitalización de un proceso manual**. Sustituye las tradicionales actas de papel por un registro digital inmutable.

**¿Cómo crees que tu solución podría mejorar procesos operativos o la toma de decisiones?**
La sección de "Historial", que calcula automáticamente el ratio de victorias (*Win Rate*) y los resultados históricos, ayuda a los entrenadores a tomar decisiones estratégicas basadas en el rendimiento objetivo del equipo a lo largo de la temporada, en lugar de depender de la memoria o de buscar en papeles archivados.

---

### 5. Mejoras en IT y OT (2f)
**¿Cómo puede tu software facilitar la integración entre entornos IT y OT?**
En este contexto, el entorno **OT (Tecnología de las Operaciones)** es el propio partido de voleibol físico y la labor operativa del árbitro o anotador. El entorno **IT (Tecnologías de la Información)** es el sistema de gestión de datos. VoleyPro actúa como el **puente** entre ambos: captura los eventos físicos (un punto, una falta) a través de su interfaz y los traduce instantáneamente en datos almacenados y estructurados.

**¿Qué procesos específicos podrían beneficiarse de tu solución en términos de automatización o eficiencia?**
Se automatiza la generación del acta final del partido. En lugar de que un operario tenga que transcribir los resultados del papel a un Excel o a la web de la federación al final del día, el dato ya nace digitalizado, reduciendo drásticamente el error humano en la transcripción.

---

### 6. Tecnologías Habilitadoras Digitales (2g)
**¿Qué tecnologías habilitadoras digitales (THD) has utilizado o podrías integrar en tu proyecto?**
Actualmente, el proyecto se apoya en conceptos de **Analítica de Datos** básica (procesamiento del historial para generar estadísticas). 

**Si no has utilizado THD, ¿cómo podrías implementarlas para enriquecer tu solución?**
VoleyPro es un candidato ideal para integrarse con **IoT (Internet de las Cosas)**. Se podrían instalar sensores de impacto en la red o utilizar balones inteligentes conectados por Bluetooth. Estos sensores enviarían la señal directamente al software, automatizando la suma de puntos en el marcador web sin necesidad de que una persona pulse el botón "+", llevando la precisión del arbitraje al siguiente nivel.

