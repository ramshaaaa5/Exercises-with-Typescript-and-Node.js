/*Question # 16: More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.*/
var guests = ["Saima", "Aisha", "Hadia"];
console.log("Great news! I found a bigger dinner table!");
//Adding more guests
guests.unshift("Laiba");
guests.splice(guests.length / 2, 0, "Maryam");
guests.push("Yusra");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
/*Question # 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.*/
console.log("Unfortunately, I can only invite 2 people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests); //shows an empty list
