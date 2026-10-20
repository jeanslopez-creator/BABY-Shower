/** Apps Script: guarda las respuestas del sitio en la pestaña "Respuestas". */
const SHEET_NAME = 'Respuestas';
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(['Fecha de respuesta', 'Nombre', 'Asistencia', 'Personas', 'Mensaje']);
  sheet.appendRow([new Date(data.submittedAt || Date.now()), data.name || '', data.attendance || '', data.guests || '1', data.message || '']);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
