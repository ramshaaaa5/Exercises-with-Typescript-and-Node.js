//Question 81. Iterating Over Object Properties

function logObject (obj: object) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}

logObject({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" })