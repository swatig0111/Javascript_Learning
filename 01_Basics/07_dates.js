//Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); //object type


//let myCreateDate = new Date(2024, 0, 3)
//let myCreateDate = new Date(2024, 0, 3, 5, 3)
let myCreateDate = new Date("2024-01-15")
console.log(myCreateDate.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Date.now());


let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth);









