//Question # 67.  Arthimetic with Mixed Types
function addNumberAndString(number1, numberString) {
    return number1 + Number(numberString);
}
console.log(addNumberAndString(10, "5"));
//Question # 68. Multiplying Decimals
function mutiplyDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(mutiplyDecimals(0.1, 0.2));
