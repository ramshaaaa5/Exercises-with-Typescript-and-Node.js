//Question 76. Function Parameters and Return Values
function addNum(num1, num2) {
    return num1 + num2;
}
console.log(addNum(4, 7));
//Question 77: Default Parameters
function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    console.log("Hello! ".concat(name, "!"));
}
greetUser("Ramsha");
greetUser();
