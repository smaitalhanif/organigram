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

```
await loadData();

renderChart();
```

}


init();

function buildTree(data){

```
const map = {};

data.forEach(item=>{

    map[item.id] = {
        ...item,
        children:[]
    };

});

let root = null;

data.forEach(item=>{

    if(!item.parent_id){

        root = map[item.id];
    }
    else if(map[item.parent_id]){

        map[item.parent_id]
            .children
            .push(map[item.id]);
    }

});

return root;
```

}

function renderNode(node){

```
const div =
    document.createElement("div");

div.className =
    "tree-node";

div.dataset.id =
    node.id;

div.innerHTML = `
    <div class="node-box">
        ${node.nama_jabatan}
    </div>
`;

div.addEventListener(
    "click",
    (e)=>{
        e.stopPropagation();
        tampilkanDetail(node.id);
    }
);

if(node.children.length){

    const children =
        document.createElement("div");

    children.className =
        "children";

    node.children.forEach(child=>{

        children.appendChild(
            renderNode(child)
        );

    });

    div.appendChild(children);
}

return div;
```

}

function renderChart(){

```
const root =
    buildTree(dataJabatan);

document
  .getElementById("org-chart")
  .appendChild(
      renderNode(root)
  );
```

}
