"use strict";
const ajax = new XMLHttpRequest();

ajax.onreadystatechange = function() {
  console.log("response : ",JSON.parse(
ajax.responseText));
};
ajax.open("GET","https://vincentjuge1987.github.io/td/src/td08/fruitQuantities.json",true);
ajax.send();


let b = JSON.parse(
ajax.responseText);

const j = document.getElementById("basket");
const header = document.createElement("tr");
j.appendChild(header)
for (let index = 0; index < 4; index++) {
    const col = document.createElement("th");
    col.textContent = `{b}`
    j.appendChild(col)

    
}






window.onload = function() {
 // TODO
};
// TODO


