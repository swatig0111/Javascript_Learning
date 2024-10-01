// const tinderUser = new Object()  // singleton object
const tinderUser = {} //non-singleton object
console.log(tinderUser);

tinderUser.id = "abc123",
tinderUser.name = "swati",
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "swati@gmail.com",
    fullname : {
        userfullname: {
            firstname : "swati",
            lastname : "gamit"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)


const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 3:"d"}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    { 
        id : 1,
        email : "swati@gmail"
    },
    { 
        id : 1,
        email : "swati@gmail"
    },
    { 
        id : 1,
        email : "swati@gmail"
    }
]


user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty('isLoggedIn'));




