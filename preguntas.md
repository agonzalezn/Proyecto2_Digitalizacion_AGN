\# Reflexión sobre Tecnologías Habilitadoras - VoleyPro



\### 1. Ciclo de vida del dato (5b)

\- \*\*Gestión:\*\* Los datos (puntos, sets, nombres) se generan mediante eventos de usuario en el DOM, se procesan en `script.js` y se almacenan localmente.

\- \*\*Consistencia:\*\* Se garantiza mediante validaciones en el código (evitando puntos negativos) y peticiones de confirmación al usuario para acciones críticas como resetear el partido.

\- \*\*Eliminación:\*\* El usuario puede purgar los datos manualmente mediante la función de "Reiniciar", ejecutando un `localStorage.clear()`.



\### 2. Almacenamiento en la nube (5f)

\- \*\*Estrategia actual:\*\* Se utiliza `LocalStorage` para garantizar que la app funcione en pabellones deportivos sin conexión (Disponibilidad).

\- \*\*Futura integración:\*\* Se podría integrar con \*\*Firebase Realtime Database\*\* (una base de datos NoSQL alojada en la nube que permite almacenar y sincronizar datos entre usuarios, dispositivos y servidores en tiempo real) para permitir que el público vea el marcador en vivo desde sus propios dispositivos móviles mediante una URL compartida.



\### 3. Seguridad y regulación (5i)

\- \*\*Medidas:\*\* Los datos no contienen información personal sensible. El archivo `legal.html` informa sobre el uso de cookies y almacenamiento local conforme a la normativa.

\- \*\*GDPR:\*\* Al ser una app de uso anónimo, se minimiza el riesgo de incumplimiento. En caso de añadir nombres de jugadores reales en el futuro, se implementaría cifrado de datos.



\### 4. Implicación de las THD en negocio y planta (2e)

\- \*\*Impacto:\*\* Digitaliza el flujo de información de un club deportivo. Sustituye el proceso manual (papel) por uno digital, permitiendo en el futuro exportar estadísticas de rendimiento para la toma de decisiones del entrenador.



\### 5. Mejoras en IT y OT (2f)

\- \*\*Integración:\*\* El software actúa como puente entre el evento físico (el partido) y el sistema de información. Automatiza la generación de resultados que de otro modo tendrían que transcribirse manualmente a una base de datos central.



\### 6. Tecnologías Habilitadoras Digitales (2g)

\- \*\*THD Utilizadas:\*\* Cloud Computing (para el despliegue del software) y analítica de datos básica a través de la persistencia local.

\- \*\*Potencial:\*\* Se podría enriquecer con \*\*IoT\*\* mediante sensores en el balón o en la red que envíen los puntos automáticamente al marcador.

