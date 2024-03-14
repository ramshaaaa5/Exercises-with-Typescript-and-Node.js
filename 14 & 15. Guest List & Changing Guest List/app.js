var guests = ["Maria", "Saima", "Aisha"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
var unableToAttend = "Maria";
console.log("".concat(unableToAttend, " can't make it to dinner."));
//
var newGuest = "Hadia";
guests[guests.indexOf(unableToAttend)] = newGuest;
//
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me fir dinner?"));
});
