# Invitación de Mía Gabriela

Invitación web para el baby shower del **20 de diciembre de 2026 a las 4:00 p. m.**, en el **Salón Comunal Los Pinos**. El diseño usa colores pastel, conserva el dragón recortado de la imagen de referencia y añade pequeñas ilustraciones originales de guerreros Saiyajin. La imagen `dragon-reference.png` debe permanecer junto a `index.html` al publicar.

## Publicar en Render

El archivo `render.yaml` configura un sitio estático. Cuando el proyecto esté en un repositorio GitHub conectado a Render, se puede crear el servicio desde ese repositorio usando el blueprint. La integración de Render o una sesión iniciada en Render es necesaria para crear/publicar el servicio desde la cuenta.

## Reunir confirmaciones en una hoja exportable a Excel

1. Crea una hoja de cálculo en Google Sheets.
2. En **Extensiones → Apps Script**, pega el contenido de `apps-script.gs` y guarda.
3. En **Implementar → Nueva implementación**, elige **Aplicación web**, ejecuta como tú y permite acceso a cualquier persona. Implementa y copia la URL que termina en `/exec`.
4. Pega la URL en `RSVP_ENDPOINT` al final de `index.html`, reemplazando las comillas vacías.
5. Publica o vuelve a desplegar el sitio en Render.
6. Descarga las respuestas desde Google Sheets en **Archivo → Descargar → Microsoft Excel (.xlsx)**.

Sin configurar `RSVP_ENDPOINT`, cada respuesta se guarda solo en el navegador de quien la envía y no se comparte con otros invitados. La URL de Apps Script será pública para recibir las respuestas. Evita guardar información sensible en el formulario.

