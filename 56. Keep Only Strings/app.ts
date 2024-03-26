//Question # 56. Keep Only Strings

let mixedArray = [1, "apple", 2, "banana", 3, true, "carrot"]

let stringsArray = mixedArray.filter(item => typeof item === "string") 

console.log(stringsArray)

