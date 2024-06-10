let dollar = document.getElementById("dollar")
let Ptag = document.getElementById("Ptag")

let dollars = dollar;
let exchange = 83.48;
function conv(){
    inr = (dollars.value* exchange).toFixed(2);
    Ptag.innerText = inr;
}