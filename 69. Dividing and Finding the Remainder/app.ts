//Question # 69. Dividing and Finding the Remainder

function divide_and_remainder(dividend: number, divisor: number,): { quotient: number; remainder: number} {
    let quotient = Math.floor(dividend/divisor)
    let remainder =dividend % divisor
    return {
        quotient,
        remainder
    }
}

console.log(divide_and_remainder(10,3))