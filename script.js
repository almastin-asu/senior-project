"use strict"

//INITIATIVE TABLE

function tableAdd(){
    var table = document.getElementById("intTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = document.getElementById("cellOne").value;
    cell2.innerHTML = document.getElementById("cellTwo").value;
    cell3.innerHTML = document.getElementById("cellThree").value;
}

document.getElementById("btnAdd").addEventListener("click", tableAdd);

//INITIATIVE RANDOM ROLL

function rollTwenty(){
    let ranNum = 1 + Math.floor(Math.random() * 20);
    console.log(ranNum);
}

document.getElementById("d20").addEventListener("click", rollTwenty);


//ENCOUNTER GENERATOR

function encountGen(){
    const roll1 = document.getElementById("roll1");
    const roll2 = document.getElementById("roll2");
    const roll3 = document.getElementById("roll3");
    const roll4 = document.getElementById("roll4");

    let a = [roll1, roll2, roll3, roll4];
    let i = Math.floor(Math.random() * a.length); 
    let r = a[i];
    
    if (r === roll1){
        roll1.style.display = "grid";
        roll2.style.display = "none";
        roll3.style.display = "none";
        roll4.style.display = "none";
    }else if (r === roll2){
        roll2.style.display = "grid";
        roll1.style.display = "none";
        roll3.style.display = "none";
        roll4.style.display = "none";
    }else if (r === roll3){
        roll3.style.display = "grid";
        roll2.style.display = "none";
        roll1.style.display = "none";
        roll4.style.display = "none";
    }else if (r === roll4){
        roll4.style.display = "grid";
        roll2.style.display = "none";
        roll3.style.display = "none";
        roll1.style.display = "none";
    }
    
}

document.getElementById("d4roll").addEventListener("click", encountGen);

