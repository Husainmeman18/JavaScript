const numbers = [23,33,45,43,12]
const isOdd = (number) => number % 2 !== 0;
const firstOddIndex = numbers.findIndex(isOdd);

if (firstOddIndex === -1) {
    console.log("All numbers are even");
}
else{
    console.log("Not all numbers are even");
}
// every method
const num = [23,33,45,43,12];
const isEven = (number) => number % 2 == 0;
const FirstEvenIndex = num.every(isEven);

if (FirstEvenIndex) {
    console.log("All numbers are even");
}
else{
    console.log("Not all numbers are even");
}
// some method
const numb = [23,33,45,43,12];
const Odd = (number) => number % 2 == 0;
const hasOdd = numb.some(isEven);

if (hasOdd) {
    console.log("All numbers are even");
}
else{
    console.log("Not all numbers are even");
}