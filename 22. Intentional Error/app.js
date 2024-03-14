/*Question # 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to
make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error
before closing the program.*/
var friends = ["Aisha", "Maria", "Sara"];
console.log(friends[3]);
//International Error: Arrays are zero-indexed, so index 3 is out of bounds. 
friends[2] = "Sara";
//Correcting the error by accessing a valid index.
