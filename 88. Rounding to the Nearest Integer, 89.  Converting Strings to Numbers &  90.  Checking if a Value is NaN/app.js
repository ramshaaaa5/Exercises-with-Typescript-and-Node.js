//Question 88: Rounding to the Nearest Integer
function roundToNearestInteger(num) {
    return Math.round(num);
}
console.log(roundToNearestInteger(4.7));
console.log(roundToNearestInteger(4.4));
//Question 89. Converting Strings to Numbers
function convertStringToNumber(str) {
    return parseFloat(str);
}
console.log(convertStringToNumber("123.45"));
console.log(convertStringToNumber("98"));
//Question 90: Checking if a Value is NaN
function isValueNaN(value) {
    return isNaN(value);
}
console.log(isValueNaN("hello"));
console.log(isValueNaN(123));
