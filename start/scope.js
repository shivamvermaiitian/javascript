// let const var
// global scope and local scope
//

let a=300;
if(true){
    let a = 30;
    console.log(a);
}
// console.log(a);

// var is global,const let is local
var c=300;
if(true){
    var c=30;
    console.log(c);
}
// console.log(c);
//global scope differ in core scope of browser and node environment

function one(userName){
    const age=23;
    function two(){
        const email =`${userName}@google.com`;
        console.log(`my user name is ${userName}`);
    }
    two();
    // console.log(email);
}

// one("radha");

//let and const are defined in scope {} then it does not available for outside scope {}

// function defined can be accesed before by execution but
// if function value is stored in variable then cannot accesed before declaration

addOne(6); // no error because function is not stored in variable
console.log(addOne(6));

function addOne(num){
    return ++num;
}
// if here write addTwo then error shown by file execution
const addTwo = function(num){
    return ++num+1;
}
console.log(addTwo(7));

//hoisting


















