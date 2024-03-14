/*Question # 18: Seeing the World Think of at least five places in the world you’d like to visit.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["France", "Germany", "Korea", "United States", "Iceland"];
console.log("Orignal Order:", places);
console.log("Alphabetical Order:", __spreadArray([], places, true).sort());
console.log("Orignal Order:", places);
console.log("Reverse Alphabetical Order:", __spreadArray([], places, true).sort().reverse());
console.log("Orignal Order:", places);
places.reverse();
console.log("Reversed Order:", places);
places.reverse();
console.log("Orignal Order:", places);
places.sort();
console.log("Alphabetical Order:", places);
places.reverse();
console.log("Reverse Alphabetical Order:", places);
