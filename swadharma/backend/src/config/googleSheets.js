const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');


function getAuth() {
const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
if (!credPath) throw new Error('GOOGLE_APPLICATION_CREDENTIALS not set');
const full = path.resolve(credPath);
if (!fs.existsSync(full)) throw new Error(`Service account JSON not found at ${full}`);


const auth = new google.auth.GoogleAuth({
keyFile: full,
scopes: [
'https://www.googleapis.com/auth/spreadsheets',
'https://www.googleapis.com/auth/drive'
]
});
return auth;
}


async function ensureSheetTab({ spreadsheetId, sheetName, auth }) {
const sheets = google.sheets({ version: 'v4', auth });
const meta = await sheets.spreadsheets.get({ spreadsheetId });
const exists = meta.data.sheets?.some(
(s) => s.properties?.title === sheetName
);
if (!exists) {
await sheets.spreadsheets.batchUpdate({
spreadsheetId,
requestBody: {
requests: [
{ addSheet: { properties: { title: sheetName, gridProperties: { rowCount: 1000, columnCount: 26 } } } }
]
}
});
}
}


async function appendRow({ sheetId, sheetName, values }) {
const auth = getAuth();
const sheets = google.sheets({ version: 'v4', auth });


await ensureSheetTab({ spreadsheetId: sheetId, sheetName, auth });


const range = `${sheetName}!A:Z`;
await sheets.spreadsheets.values.append({
spreadsheetId: sheetId,
range,
valueInputOption: 'USER_ENTERED',
requestBody: { values: [values] }
});
}


module.exports = { appendRow };