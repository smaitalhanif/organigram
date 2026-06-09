const API_URL =
'https://script.google.com/macros/s/AKfycbw-PaqXM3_wZlPdHu40NkxibOuExynOLMNIB0EHr640va80x8fjzub3wDkZHA-igiGA/exec';

let dataJabatan = [];

async function loadData() {

  const response =
    await fetch(API_URL);

  dataJabatan =
    await response.json();

}
