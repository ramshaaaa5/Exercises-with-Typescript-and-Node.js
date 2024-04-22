//Question 76. Function Parameters and Return Values

function addNum(num1: number, num2: number): number {
    return num1 + num2    
}

console.log(addNum(4,7))

//Question 77: Default Parameters

function greetUser(name: string = "anonymous") {
    console.log(`Hello! ${name}!`);   
}

greetUser("Ramsha")
greetUser()