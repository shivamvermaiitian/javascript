// "hitesh" 'hitesh' both are string for javascript
// let name="hitesh";
// let count =30;
// console.log(name+count+" youtube");
// console.log('my name is ${name} and i have ${count} repository. i am youtuber.');
// console.log(`my name is ${name} and i have ${count} repository.`);
// modern way of writing string 
// string interpolation

const gameName = new String('hitessh');
console.log(gameName);
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.__proto__);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));
console.log(gameName.substring(0,4));
console.log(gameName.slice(-8,7));

let newString = "    hitesh    "
console.log(newString);
console.log(newString.trim());

const url = "https://hitesh.com/hitesh%20chaudhary";
console.log(url.replace("%20","_"));
console.log(url.includes("%20chaudhary"));