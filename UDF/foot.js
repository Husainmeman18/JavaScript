let meter = document.getElementById("meter")
let Ptag = document.getElementById("Ptag")

function conv(){
    let foot = meter.value * 3.2808;
    console.log(foot);
    Ptag.innerText = "Foot is "+ foot;
}
