//data categorization on the basis of how put in memory and how access
// primitive call by value copy of data given not exact data given
// string number boolean null undefined symbol bigInt

// non primitive reference type
// array object function
// object master and browser web event master
// 
// javascript is dynamically typed language
const id=Symbol('1234');
const anotherId=Symbol('1234');
console.log(id===anotherId);
const bigNumber=3492829239043n;// to handle in big int add extra n

let myObj={
    name:"shiva",
    age:20,
    college:"iitism",
}
const friend=["saurabh","srijan","shaddam","srijal","anni"];

const fun=function(){
    console.log("hello friends");
}
console.log(fun);