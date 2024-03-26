//Question # 58. Average Score Calculator

function average_score(...scores: number[]): number {
    let total = scores.reduce((sum, score) => sum + score, 0)
    return total / scores.length
}
console.log(average_score(80,90,100,70));


//Question # 59: Add a Special Number
 
function makeAdder(valueToAdd : number): (number) => number {
    return function(number:number) : number {
        return number + valueToAdd
    }
}
let addFive = makeAdder(5)
console.log(addFive(10));
