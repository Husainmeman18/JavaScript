var array = [1,2,3,4,5,6,7,8,9,0];
const evennumber = array.filter(Number => Number % 2 ==0);
const oddnumber = array.filter(Number => Number % 2 !==0)

console.log("Even number is : " , evennumber);
console.log("Even number is : " , oddnumber);