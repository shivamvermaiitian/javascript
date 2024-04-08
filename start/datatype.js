//stack heap
// primitive data type string number boolean symbol bigInt null undefined
// premitive data structure is impemented by stack

// function array onject uses heap
// heap give direct references change by one reflect in other

let userOne={
    email:"javascript@gmail.com",
    upi:"javascript.axis",
}
let userTwo=userOne;
userTwo.upi="java.ybl"
//then userone upi also change because both have same reference for object
// console.table[userOne.upi,userTwo.upi];
console.log(userOne.upi);
console.log(userTwo.upi);

