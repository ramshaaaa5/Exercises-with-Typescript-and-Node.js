//Question # 70. Understanding let in loop 
function numbers() {
    for (var a = 1; a <= 5; a++) {
        console.log(a);
    }
}
numbers();
//Question #71. Compare let and const 
var age = 25;
age = 26;
console.log(age);
var name1 = "Ali";
try {
    name1 = "Ammar";
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
