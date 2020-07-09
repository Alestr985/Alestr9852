"use strict"

let color = prompt("Введите цвет фона");
if (color=="black"){
	document.body.style.background = "black";
}
if (color=="red"){
	document.body.style.background = "red";
}
if (color=="white"){
	document.body.style.background = "white";
}
else {
	document.body.style.background = "grey";
}  
let age = prompt("Введите ваш возраст");
if (age>=18){
	document.getElementById("cat").style.display = "block";
}
else {
	document.getElementById("age").style.display = "flex";
}