/*Question #3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase.*/

let person_name = "Ramsha Shoaib"

// lowercase
console.log(person_name.toLowerCase())

// uppercase
console.log(person_name.toUpperCase())

//titlecase
function titlecase(str){
    str=str.trim().toLowerCase().split(' ')
    for (let i = 0; i < str.length; i++) {
        str[i]=str[i][0].toUpperCase()+str[i].slice(1)
    }
    console.log(str.join(' '));
    return str
    
}

titlecase(person_name)