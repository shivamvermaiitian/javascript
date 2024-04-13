const isUserLoggedIn= true

// if(2=="2"){
// console.log("executed");
// let power = 200;
// console.log(`power is less than ${power}`);

// }else{
//     console.log("not executed");
// }
let balance =2900;

//implicit scope
if(balance>500)console.log(`balance is more than ${balance}`),console.log("executed");

// && || != used of conditional statements

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// shift alt downarrow
let month =3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    default:
        console.log("no month");
        break;
}
// if you dont use break in every case then if a case is correct then
//after that every value if printed except default value

let name = "shivam"
switch (name) {
    case "srijanl":
        console.log("your name found");
        break;
    case "saurabh":
        console.log("your name found");
        break;
    case "shivam":
        console.log("your name found");
        break;
    default:
        console.log("shaddam found");
        break;
}

const userEmail = ""
if(userEmail){
    console.log("got user email");
}else {
    console.log("dont get user value");
}
// false value false 0 -0 empty string , BigInt 0n, null undefined,NaN

// true value string "0", "false"," ",function(){},[],{}

// userEmail is empty array then if directly write then give correct

// if(userEmail.length===0)console.log("userEmail is empty");
// else console.log("valid Email");

const emptyObj = {}

if(Object.keys(emptyObj).length===0)console.log(`${emptyObj} is empty`);

// false == 0 , 0=="", false ="" give true value

// logical operator || &&


//Nullish Coalescing Operator (??): n

let val1;
val1 = 5 ?? 10 // always go first value
console.log(val1);

// when you firebase database then two values comes then
//  in that case we use

// val1 = null ?? 20
val1 = null ?? 16 ?? 17

console.log(val1);

// ternary operator

// condition ? true : false 

(2==3) ? console.log("correct") :console.log("incorrect");









