//Question 75. Compound Assignment Operators

function useCompoundOperators() {
    let x = 4
    console.log("Initial x:" , x)

    x += 2
    console.log("After addition: ", x)

    x -= 3
    console.log("After subtraction: ", x)

    x *= 5
    console.log("After multiplication: ", x)
    
    x /= 2
    console.log("After diviion: ", x);
}

useCompoundOperators()