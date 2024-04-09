// const lsgPlayer = ["klrahul","naveen yadav","pooran","decock"];
// const rcbPlayer = ["kingkohli","siraj","duplesis","kartik"]
// //lsgPlayer.push(rcbPlayer);
// //console.log(lsgPlayer); push rcbPlayer as a single array
// const allPlayer = lsgPlayer.concat(rcbPlayer);
// // console.log(allPlayer);

// const heros = [...rcbPlayer, ...lsgPlayer];
// console.log(heros);

const anArr = [1,2,3,[4,5,6],7,[8,9],[[[1,2,[3,[4,[5]]]]]]];
const changeArr = anArr.flat(Infinity);
console.log(changeArr);

// array function use
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"hitesh"}));//give empty array because unable to convert

console.log(Array.of(100,200,300,400));
