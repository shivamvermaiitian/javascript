// let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


// console.log(typeof myDate);

const myCreateDate = new Date(2023,0,8);
console.log(myCreateDate.toLocaleString());
console.log(myCreateDate.toDateString());

const birthDate = new Date("2023-01-28");//try mmddyyyy
console.log(birthDate);

const myTime = Date.now()

console.log(myTime);
console.log(Math.floor(myTime/1000));
// console.log(Date.getMonth()+1);
let newDate = new Date()
console.log(newDate.getMinutes());// get time month
newDate.toLocaleString('default',{
    weekday:"long",
})
