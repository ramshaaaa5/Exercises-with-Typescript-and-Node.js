//Question #  73: Assigning and Updating Variables
function updatevariable() {
    var number = 10;
    console.log("Initial value:", number);
    number = 20;
    console.log("Updated value:", number);
}
updatevariable();
//Question # 74. Swapping Variables
function swapValues() {
    var a = 5, b = 10;
    console.log("Before swap: a =", a, "b = ", b);
    var temp = a;
    a = b;
    b = temp;
    console.log("After swap: a =", a, "b =", b);
}
swapValues();
