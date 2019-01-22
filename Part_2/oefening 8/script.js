function askAge(){
let yourAge = document.getElementById("age").value;
if(yourAge<18) {
    alert("U bent minderjarig.");
}
else{
    alert("U bent meerderjarig.");
}
}