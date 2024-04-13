// for in for of

// const arr = [ 2,3 ,4,5 ,,,6]
// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "welcome to the JT"
// for (const greet of greeting) {
//     if(greet===' ')break;
//     console.log(greet);
// }

const map = new Map()
map.set('in','india')
map.set('fr','france')
map.set('ch','china')
map.set('us','united states')

// for (const code of map) {
//     console.log(code);
// }

// console.log(map);
// unique value  map

// for (const [key , value] of map) {
//     console.log(key , ":-" , value);
// }

// const myObj = {
//     'game1' : "cricket",
//     'game2' : "weighlifting",
//     'game3' : "badminton"
// }

// for (const val of myObj) {
//     console.log(val);
// }
// object is not iterable through for of loop

// for (const game in myObj) {
//     console.log(game,":-",myObj[game]);
// }
//succesfully executed

// const langauge = ['cpp','js','py','rb']
// for (const code in langauge) {
//     // console.log(code);
//     console.log(code, ":-",langauge[code]);
// }

// for (const code in map) {
//     console.log(map[code]); // map is not iteratable through keys
// }

/*
for in used for object array

for of used for  map array

*/

const langauges = ['java','c++','c','python']

// langauges.forEach( function (i) {
//     console.log(i);
// } )

// langauges.forEach((val)=>{
//     console.log(val);
// })

// function printMe (item){
//     console.log(item);
// }

// langauges.forEach(printMe);
// // item then index then total array
// langauges.forEach((item,index,me) =>{
//     console.log(item,index,me);
// } )

const myCoding = [
    {
        name:"javascript",
        file: "js"
    },
    {
        name : "c++",
        file : "cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.name,':-',item.file);
})























