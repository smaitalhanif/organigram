const API_URL =
"https://script.google.com/macros/s/AKfycbw-PaqXM3_wZlPdHu40NkxibOuExynOLMNIB0EHr640va80x8fjzub3wDkZHA-igiGA/exec";
let dataJabatan = [];
async function loadData(){
    const res =
      await fetch(API_URL);

    dataJabatan =
      await res.json();

}

function tampilkanDetail(id){

    const j =
      dataJabatan.find(
        item => item.id === id
      );

    if(!j) return;

    document
      .getElementById("detail-panel")
      .innerHTML = `

        <h2>${j.nama_jabatan}</h2>

        <hr>

        <p>
        <b>Personel</b><br>
        ${j.personel || '-'}
        </p>

        <p>
        <b>Tugas</b><br>
        ${j.tugas || '-'}
        </p>

        <p>
        <b>Wewenang</b><br>
        ${j.wewenang || '-'}
        </p>

        <p>
        <b>Tanggung Jawab</b><br>
        ${j.tanggung_jawab || '-'}
        </p>

        <p>
        <b>Masa Jabatan</b><br>
        ${j.masa_jabatan || '-'}
        </p>

      `;
}

async function init(){


await loadData();

console.log(
  "Jumlah Jabatan:",
  dataJabatan.length
);

document
  .querySelectorAll(".node")
  .forEach(node=>{

    node.addEventListener(
      "click",
      ()=>{

        tampilkanDetail(
          node.dataset.id
        );

      }
    );

  });


}



init();

