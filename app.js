const API_URL =
"https://script.google.com/macros/s/AKfycbw-PaqXM3_wZlPdHu40NkxibOuExynOLMNIB0EHr640va80x8fjzub3wDkZHA-igiGA/exec";

async function init(){

    const res =
        await fetch(API_URL);

    const data =
        await res.json();

    renderTree(data);

}

init();
