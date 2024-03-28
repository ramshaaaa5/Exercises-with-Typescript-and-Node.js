//Question # 69. Dividing and Finding the Remainder
function divide_and_remainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return {
        quotient: quotient,
        remainder: remainder
    };
}
console.log(divide_and_remainder(10, 3));
