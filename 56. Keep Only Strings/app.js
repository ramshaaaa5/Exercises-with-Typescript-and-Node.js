//Question # 56. Keep Only Strings
var mixedArray = [1, "apple", 2, "banana", 3, true, "carrot"];
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringsArray);
