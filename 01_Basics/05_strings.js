const name = "Swati"
const repoCount = 50

console.log(name + repoCount) //Not a good method for string concatination 

//string interpolation 
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


const gameName = new String("SwatiG")

console.log(gameName[0]);
console.log(gameName[1]);


//Some functions
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);
//it will not inlcude 4th index 

const anotherString = gameName.slice(-8,4)
console.log(anotherString);
//Negative values only use in slice method 

const newStringOne = "  swati   "
console.log(newStringOne);
console.log(newStringOne.trim());
//trim will remove staritng and endling space


const url = "https://swati.com/swati%20gamit"
console.log(url.replace('%20','-'))











