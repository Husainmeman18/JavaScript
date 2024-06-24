var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

function Petcounts(obj,pet){
    if (obj[pet]) {
        obj[pet] = obj[pet] + 1;
    }
    else{
        obj[pet] = 1;
    }
    return obj
}
let petcounting = pets.reduce(Petcounts,{});
console.log(petcounting);