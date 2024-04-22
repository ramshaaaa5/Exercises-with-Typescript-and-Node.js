//Question 94. .map() method
var words = ["Hello", "World", "TypeScript", "JavaScript"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
//Question 95. .filter() method 
function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var number = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(number));
//Question 96. .reduce() method
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
