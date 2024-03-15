
let rollBox = document.querySelector('#roll_box');
let nameBox = document.querySelector('#name_box');
let sub1 = document.querySelector('#sub1');
let sub2 = document.querySelector('#sub2');
let sub3 = document.querySelector('#sub3');
let sub4 = document.querySelector('#sub4');
let sub5 = document.querySelector('#sub5');
let remove = document.querySelector('#remove');
add = () =>
{
    let inp1 = document.createElement('input');
    inp1.className= "roll";
    rollBox.appendChild(inp1);

    let inp2 = document.createElement('input');
    inp2.className= "name";
    nameBox.appendChild(inp2);

    let inp3 = document.createElement('input');
    inp3.className= "sub1";
    sub1.appendChild(inp3);

    let inp4 = document.createElement('input');
    inp4.className= "sub2";
    sub2.appendChild(inp4);

    let inp5 = document.createElement('input');
    inp5.className= "sub3";
    sub3.appendChild(inp5);

    let inp6 = document.createElement('input');
    inp6.className= "sub4";
    sub4.appendChild(inp6);

    let inp7 = document.createElement('input');
    inp7.className= "sub5";
    sub5.appendChild(inp7);
    
    let dlt = document.createElement('button');
    dlt.className= "delete";
    dlt.innerText= "Delete"
    remove.appendChild(dlt);
}