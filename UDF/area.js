function areaOfTriangle(base, height) {
    return 0.5 * base * height;
}

function areaOfRectangle(length, width) {
    return length * width;
}

function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

function CalcArea() {
    let Shape = prompt("Enter any one for area : Triangle,Rectangle,Circle")
    let result;

switch (Shape) {
    case 'triangle':
        let base = prompt("Enter the base of the triangle:")
        let height = prompt("Enter the height of the triangle:")
        result = areaOfTriangle(base,height);
        break;
    case 'rectangle':
        let length = prompt("Enter the length of the Rectangle:")
        let width = prompt("Enter the width of the Rectangle:")
        result = areaOfRectangle(length,width);
        break;
    case 'circle':
        let radius = prompt("Enter the radius of the circle:")
        result = areaOfCircle(radius);
        break;
    default:
        result = "invalid choice";
        break;
}
    alert("Area is :" + result);
}
CalcArea();