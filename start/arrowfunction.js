//this keyword says about current context
// arrow function

const user = {
    userName:"hitesh",
    price:2499,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}
// console.log(this); here this is empty, but in browser this shows window
// in browser most global object is window object
// user.welcomeMessage();


// function chai(){
//     let userName = "hitesh";
//     console.log(this);
// }
// // this keyword used in object not in function
// chai()


// const chai=function(){
//     let userName = "hitesh";
//     console.log(this.userName);
// }
// chai();


const chai=()=>{//arrow function
    let userName = "hitesh";
    console.log(this.userName);
}
// chai();

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(2,3));

const addTwo = (num1,num2)=>num1+num2;//implicit return dont use curly brackets

const add = (num1,num2)=>({username : "hitesh"});//bracket are return

console.log(add(2,5));


//immediately invoked function expression(IIFE) = function that is immediately execute running 

//global scope pollution removed by invoked function


// ( (name)=>{
//     console.log(`iife executed by ${name}`);
// }
// )("jitesh");

(function chai(name){
    console.log(this.name);
}

)();

()()

()();







