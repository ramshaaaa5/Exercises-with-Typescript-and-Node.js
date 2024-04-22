//Question 81. Iterating Over Object Properties
function logObject(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
logObject({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
