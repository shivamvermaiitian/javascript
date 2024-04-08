const myArr = new Array(1,2,3,4,5,6,7,8,9);
const myArr1 = [1,2,3,4,5,6]; 
// console.log(myArr1);
// myArr.push(37);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.unshift(0);// add value at position zero
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// //check element
// console.log(myArr.includes(9));

//const newArr = myArr.join();// convert array into string
//console.log(newArr);

//slice splice

console.log(myArr.slice(1,3));
console.log("A",myArr);

const myArr2 = myArr.splice(1,4);//change original array use heap for impementation
console.log(myArr2);
console.log("B", myArr)












