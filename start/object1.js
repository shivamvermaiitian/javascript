const tinderuser= new Object(); //sigleton object
const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="shravan"
tinderUser.isLoggedIn=false
// console.log(tinderUser);
 const regUser ={};
 regUser.email="pari@gmail.com"
 regUser.fullname={
    first:"harsh",
    middle:"anand",
    last:"singh",
 }
 regUser.choice = {
    sports :{
        cricket:"Most",
        badminton:"less",
    }
 }

// console.log(regUser);

// console.log(regUser.fullname.first);
// console.log(regUser.email?.fullname.first);

const obj1 = { 
    1:"a",
    2:"ab",
}
const obj2 = {
    3:"abc",
    4:"abcd",
}
///////////////// const obj =concat(obj1,obj2);
// console.log(obj);
//const obj = Object.assign(obj1,obj2);//here obj2 goes in obj1
// can use Object.assign({},obj1,obj2) here goes in empty object

const obj = {...obj1,...obj2}

// console.log(obj);

const user = [
    {

    },
    {

    },
    {
        id:"1203",
        email:"hwa@gmail.com"
    },
    {

    },
    {

    }
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));// check the key of object












