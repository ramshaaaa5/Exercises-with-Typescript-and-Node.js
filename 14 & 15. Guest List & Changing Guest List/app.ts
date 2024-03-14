/*Question # 14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a 
message to each person, inviting them to dinner.*/

let guests: string[]= ["Maria", "Saima", "Aisha"]
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`)
})

/*Question # 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
send out a new set of invitations. You’ll have to think of someone else to invite. */

let unableToAttend = "Maria"
console.log(`${unableToAttend} can't make it to dinner.`)

let newGuest = "Hadia"
guests[guests.indexOf(unableToAttend)] = newGuest
 
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me fir dinner?`)
})