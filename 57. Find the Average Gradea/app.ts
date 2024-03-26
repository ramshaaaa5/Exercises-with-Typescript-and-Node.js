//Question # 57. Find the Average Grade
 
let grades = [88,74,93,64,59,75]

let average_grade = grades.reduce((total, grade) => total + grade, 0 )/ grades.length

console.log(average_grade);
