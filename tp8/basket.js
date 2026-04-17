"use strict";
const ajax = new XMLHttpRequest();

ajax.onreadystatechange = function() {
  console.log("response : ",JSON.parse(
ajax.responseText));
};
ajax.open("GET","https://vincentjuge1987.github.io/td/src/td08/fruitQuantities.json",true)
ajax.send();

getd







window.onload = function() {
 // TODO
};
// TODO


