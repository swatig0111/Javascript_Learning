//objects are variales too. but ut contains many values 


const mysym = Symbol("mykey1")

//object literals 
const Jsnew = { 
    name : "swati", //here name is key and swati is value, in objects you need to define key and value both. 
    "full name" : "swati gamit",
    [mysym] : "mykey1",  // define symbol with the square bracket 
    age : 18,
    location : "surat",
    email : "swati@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Sunday"]

}


//access object values 
//method one (dot(.) method)
console.log(Jsnew.age);
console.log(Jsnew.location);
//method two 
console.log(Jsnew["email"]);


//we can change the object value by dot(.) notation
Jsnew.email = "swati@google.com"
console.log(Jsnew.email);
// Object.freeze(Jsnew)   //value of object won't change when you freeze it 
Jsnew.email = "swati@chatgpt.com"
console.log(Jsnew.email);

Jsnew.greeting = function() {
    console.log("hello, good morning");
    
}

Jsnew.greetingTwo = function() {
    console.log(`hello, good morning, ${this.name}`);
    //do the back tracking and put use the bthis method to print the name of object value 
    
}

console.log(Jsnew.greeting());
console.log(Jsnew.greetingTwo());


