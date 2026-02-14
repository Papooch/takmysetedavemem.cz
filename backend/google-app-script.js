/* eslint-disable no-undef */
const SHEET_ID = "2005859356";

const ColumnNames = {
  timestamp: "Datum",
  name: "Jméno",
  personCount: "Počet osob",
  sleeping: "Přespání",
  contact: "Kontakt",
  drink: "Pití",
  message: "Poznámka",
};

// eslint-disable-next-line no-unused-vars
function doPost(e) {
  try {
    const hash = hashPassword(e.parameter.password || "");
    if (!allowedHashes.has(hash)) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "wrong_password" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const params = {
      [ColumnNames.timestamp]: new Date(),
      [ColumnNames.name]: e.parameter.name,
      [ColumnNames.personCount]: e.parameter.personCount,
      [ColumnNames.sleeping]: e.parameter.sleeping,
      [ColumnNames.contact]: e.parameter.contact,
      [ColumnNames.drink]: e.parameter.drink,
      [ColumnNames.message]: e.parameter.message,
    };

    const result = submit(params);

    return ContentService
      .createTextOutput(JSON.stringify({ status: result }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function submit(params) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetById(SHEET_ID);

  const data = sheet.getDataRange().getValues();
  let headers = data[0];

  const nameColumnIndex = headers.indexOf(ColumnNames.name);
  if (nameColumnIndex === -1) {
    throw new Error("Name column not found");
  }

  const submittedName = String(params[ColumnNames.name] || "").toLowerCase();

  const existingRowIndex = data.findIndex((row, index) => {
    if (index === 0) return false;
    return String(row[nameColumnIndex]).toLowerCase() === submittedName;
  });

  const rowData = headers.map(header => params[header] ?? "");

  if (existingRowIndex !== -1) {
    // Update existing row
    sheet
      .getRange(existingRowIndex + 1, 1, 1, headers.length)
      .setValues([rowData]);

    return "updated";
  }
  else {
    // Append new row
    sheet.appendRow(rowData);
    return "created";
  }
}

// Password hashing function must be the same as in ConfirmationFormEntrypoint.vue
function hashPassword(password) {
  let h = 0;
  for (let c = password.length; c--;) {
    h += password.charCodeAt(c);
    h += h << 10;
    h ^= h >> 6;
  }
  h += h << 3;
  h ^= h >> 11;
  return (((h + (h << 15)) & 4294967295) >>> 0).toString(16);
}

const allowedHashes = new Set([
  "1444758d", // "cz"
  "4d84dd5d", // "cz, sleeping"
  "f1ce1f45", // "en, sleeping"
]);
