//singleton when made by constructure Object.create
//multiton when defined literally
// object literals
// const userJs = {
//     0:"hitesh",
//     1:"ramesh",
//     2:"suresh",
// }
// console.log(userJs[1]);
// // console.table[userJs[0],userJs[1],userJs[2]];
// console.log(userJs[0]);

const mySym = Symbol("hitesh");


const jsUser = {
    name : "hitesh",
    "full name" : "hitesh chaudhary",
    [mySym] : "hitesh cha",
    age : 19,
    location : "jaipur",
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser[mySym]);
 
// jsUser.name="shivam";
// Object.freeze(jsUser);
// jsUser["name"]="hitesh";
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello my son");
}
console.log(jsUser.greeting());
console.log(jsUser.greeting);
// string interpolation use dollar sign for variable in string

jsUser.greetingtwo = function(){
    console.log(`hello java user ${this.name}`);
}
console.log(jsUser.greetingtwo());







