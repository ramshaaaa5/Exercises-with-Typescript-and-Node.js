// Question # 51. Refracting to Arrow Functions

function calculateArea(width:number, height:number):number {
    return width * height
} 
let calculateAreaArrow = (width:number, height:number): number => width*height
console.log(calculateAreaArrow(5,7));
