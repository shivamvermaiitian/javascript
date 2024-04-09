// function sayMyName(){
//     console.log("h");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// }
// sayMyName()

function addTwoNumber(num1,num2){//parameter are num1,num2
    console.log(num1+num2);
    return num1+num2;
}

// console.log(addTwoNumber(10,2));//arguments are 10,2

function loginUser(userName="unknown"){
    if(userName === undefined){
        console.log("Please enter the username");
        return;
    }
    return `${userName} just logged in`;
}
// console.log(loginUser("prerna"));
// console.log(loginUser());

// specialy function write in true false value

function reviewUser(visitor){
    if(!visitor){
        console.log("Please enter the name");
        return;
    }
    console.log(`very good by ${visitor}`);
}
// console.log(reviewUser());
// console.log(reviewUser("hanuman"));

// function cartPrice(num1){
//     return num1;
// }
//... rest operator spread operator

// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(100,200,300,400));

function calculateCartPrice(val1,val2,...num1){
    return num1;
}

// console.log(calculateCartPrice(100,200,300,400,500));

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and total spent price is ${anyObject.price} `);
    return;
}
// handleObject({username:"hariya",price:10});

function secondElement(getArr){
    if(getArr.length<2){
        console.log(`array has length less than two`);
        return;
    }
    return getArr[1];
}

console.log(secondElement([2,]));















