/*Question # 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each 
person’s name, print a message to them. The text of each message should be the same, but each message should 
be personalized with the person’s name.*/

let Greetings= "Good morning! How's your day going?"
let names: string[]= ["Ayesha", "Maria", "Maham"]
for (let name of names) {
    console.log(`${Greetings} ${name}, `)
}