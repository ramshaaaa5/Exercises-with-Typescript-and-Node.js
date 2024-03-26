//Question # 57. Find the Average Grade
var grades = [88, 74, 93, 64, 59, 75];
var average_grade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(average_grade);
