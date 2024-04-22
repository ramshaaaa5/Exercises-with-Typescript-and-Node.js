//Question # 70. Understanding let in loop 

function numbers() {
    for (let a = 1; a <= 5; a++) {
        console.log(a)
    }
}
numbers()

//Question #71. Compare let and const 

let age = 25
age = 26
console.log(age);

const name1 = "Ali"
try {
    name1 = "Ammar"
} catch(error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}

