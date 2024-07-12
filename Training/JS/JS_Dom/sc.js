let box = document.getElementById("box");

box.style.backgroundColor = "black";

box.setAttribute("id","box-2")
//box.setAttribute("class","c1")

setTimeout(()=>{
    box.classList.add("c1");
},1000)


var card = document.getElementsByClassName("c3");

console.log(card);

var tag = document.getElementsByTagName("div");

var generalSelectorForID = document.querySelector("#box");
var generalSelectorForClass = document.querySelector(".c1");
var generalSelectorForTag = document.querySelector("h1");

var generalSelectorForAllTag = document.querySelectorAll(".c3 > h1");



