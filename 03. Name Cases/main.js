var person_name = "Ramsha Shoaib";
// lowercase
console.log(person_name.toLowerCase());
// uppercase
console.log(person_name.toUpperCase());
//titlecase
function titlecase(str) {
    str = str.trim().toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
    return str;
}
titlecase(person_name);
