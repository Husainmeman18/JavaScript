let form = document.getElementById("form")
let Ptag = document.getElementById("Ptag")

function celsius(){
    let fahren = (9/5) * form.value + 32;
    Ptag.innerText = "Fahrenheit is "+ fahren;
}
