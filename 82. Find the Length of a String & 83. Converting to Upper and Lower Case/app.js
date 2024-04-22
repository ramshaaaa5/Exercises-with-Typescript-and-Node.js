//Question 82. Find the Length of a String 
function stringLength(str) {
    return str.length;
}
console.log(stringLength("Alice"));
//Question 83: Converting to Upper and Lower Case:
function convertCase(str) {
    var upperStr = str.toUpperCase();
    var lowerStr = str.toLowerCase();
    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
convertCase("Hello World");
