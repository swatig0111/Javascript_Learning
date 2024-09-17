const accountID = 123654
let accountEmail = "swati@gmail.com"
var accountpassword = "hello"
let accountName; //--> takes undefined 

// accountID=3 --> not allowed
console.log(accountID);
console.log(accountEmail);


/*
Prefer not to use var because of issues in block and functional scope 
*/

console.table([accountID, accountEmail, accountpassword, accountName])

