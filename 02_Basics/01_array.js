//Array 
const myArray = [1, 2, 3, 4, 5 ]
const myString = ["marvel", "dc"]

const myArr2 = new Array(1,2,2,4,5);
console.log(myArr2[4]);

//array methods 
myArr2.push(4);
console.log(myArr2);
myArr2.pop()
console.log(myArr2);

console.log(myArray.includes(5));
console.log(myArray.indexOf(2));


const newArr = myArr2.join()
console.log(newArr);
console.log(typeof newArr);


//slice and splice 

console.log("A", myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3)
console.log("C", myArray);
console.log(myn2);



















