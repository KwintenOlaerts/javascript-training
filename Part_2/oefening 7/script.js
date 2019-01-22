function dataGebruiker (){
let height = document.getElementById("height").value;
let birthdate = document.getElementById("birthdate").value;
let multiplyHeight = height*2;
let addFive = multiplyHeight+5;
let timesFifty = addFive*50;
let minusBirthYear = timesFifty-birthdate;
let addMoreNumbers = minusBirthYear + 1766;


window.alert(addMoreNumbers);
}