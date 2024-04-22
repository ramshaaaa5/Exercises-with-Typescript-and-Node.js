//Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
let favfruits = ["Mango", "Strawberry", "Kiwi"]
favfruits.push("Cherry")
console.log(favfruits)

//Question 92: Write a function to remove the last element from an array and return the removed element.

function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop()
}

// Example: Removing the last fruit from the array
const fruit: string[] = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruit))
console.log(fruit)

//Question 93. Find the index of Banana in an array of fruits and replace it with Mango.
function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana")
    if (index !== -1) fruits[index] = "Mango"
}
const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits)