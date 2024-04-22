//Question #  73: Assigning and Updating Variables
function updatevariable() {
    let number = 10
    console.log("Initial value:" , number)

    number = 20
    console.log("Updated value:" , number);
    
}
updatevariable()

//Question # 74. Swapping Variables
function swapValues() {
    let a = 5, b = 10
    console.log("Before swap: a =", a , "b = " , b);
     
    let temp = a
    a = b 
    b = temp
    console.log("After swap: a =", a, "b =", b)
}
swapValues()