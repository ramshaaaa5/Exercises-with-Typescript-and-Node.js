//Question 82. Find the Length of a String 
function stringLength(str: string): number {
    return str.length
}
console.log(stringLength("Alice"))

//Question 83: Converting to Upper and Lower Case:
function convertCase(str: string) {
    let upperStr = str.toUpperCase() 
    let lowerStr = str.toLowerCase()

    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}

convertCase("Hello World")