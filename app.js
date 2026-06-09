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
function buildTree(data){

    const map = {};

    data.forEach(item=>{

        map[item.id] = {

            text:{
                name:item.nama_jabatan
            },

            data:item,

            children:[]
        };

    });

    let root = null;

    data.forEach(item=>{

        if(!item.parent_id){

            root = map[item.id];

        }

        else{

            map[item.parent_id]
            .children
            .push(
                map[item.id]
            );

        }

    });

    return root;

}
function renderTree(data){

    const root =
      buildTree(data);

    new Treant({

        chart:{
            container:"#tree"
        },

        nodeStructure:root

    });

    setTimeout(()=>{

        attachClickEvents(data);

    },500);

}

function attachClickEvents(data){

    const nodes =
      document.querySelectorAll(".node");

    nodes.forEach(node=>{

        node.addEventListener("click",function(){

            const nama =
              this.innerText.trim();

            const jabatan =
              data.find(
                x =>
                x.nama_jabatan === nama
              );

            if(!jabatan) return;

            tampilkanDetail(jabatan);

        });

    });

}

function tampilkanDetail(j){

    document
    .getElementById("detail")
    .innerHTML = `

    <h2>
      ${j.nama_jabatan}
    </h2>

    <p>
      <b>Personel:</b><br>
      ${j.personel || '-'}
    </p>

    <p>
      <b>Tugas:</b><br>
      ${j.tugas || '-'}
    </p>

    <p>
      <b>Wewenang:</b><br>
      ${j.wewenang || '-'}
    </p>

    <p>
      <b>Tanggung Jawab:</b><br>
      ${j.tanggung_jawab || '-'}
    </p>

    <p>
      <b>Masa Jabatan:</b><br>
      ${j.masa_jabatan || '-'}
    </p>

    `;

}
