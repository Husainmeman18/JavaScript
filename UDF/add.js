function add(x, y) {
    x + y
}
function Sub(x, y) {
    x - y
}
function Mul(x, y) {
    x * y
}
function Divi(x, y) {
    x / y
}
function calc() {
    let Que = prompt("Enter method + || - || * || /")
    let num1 = parseFloat(prompt("Enter the first value"))
    let num2 = parseFloat(prompt("Enter the Second value"))

    let result;

    switch (Que) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "invalid choice"
            break;

    }
    alert("The result is " + result);
}

calc();