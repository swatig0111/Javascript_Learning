"use strict"

let score = "33abc"

console.log(typeof score);
console.log(typeof (score));


let ValueInNumber = Number(score);
console.log(score);
console.log(ValueInNumber);


//boolean type conversion 
let title = "Boolean type conversion"
console.log(title);

let isLoggedIn = 1 
console.log(isLoggedIn);

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(isLoggedIn);

//1->true, 0->false
//"" -> false 
//"hitesh" -> true 

console.log("number to string conversion");

let random = 89
let stringNumber = String(random)
console.log(stringNumber);
console.log(typeof stringNumber);



//Operations
console.log("Operations..!!!");
let value = 3 
let negvalue = -value
console.log("The negative value of : " + negvalue);



//String Concatination 
console.log("String Operations");

let str1 = "hello"
let str2 = " swati"
let str3 = str1 + str2
console.log(str3);


console.log(1 + "2");
console.log(1 + 2);
console.log("1" + "2");
console.log(3 + 1 + "2");
console.log(3 + "1" + "2");


//Perfix and Postfix 
let randomNumber = 100
randomNumber++;
console.log(randomNumber);

let randomNumber1 = 100
++randomNumber1;
console.log(randomNumber1);















