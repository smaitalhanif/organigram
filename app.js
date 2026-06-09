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

}
