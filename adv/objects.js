// There are two - types of instantiation of object in JS.
// Singleton  - single instance of the object

// If the object is formed from constructor , then it'll be singleton.
// Object.create

const sy = Symbol("key1")
// If from literals , then it'll be not a singleton object.
const jsUser = {
    name : "Bhindi",
    price : "$1.5",
    location : "Behata",
    "type of" : ["Small", "Large", "Medium"],
    [sy] : "key2"
}

// Ways of accessing the values.
console.log(jsUser.name)
console.log(jsUser["type of"])

// for accessing symbols , we'll need sq brackets always.
console.log(jsUser[sy])


jsUser.name = "Chicken" // For changing the values of a object.

//Object.freeze(jsUser) // It is used for freezing a object , so that no values can be changed further.
console.log(jsUser)


jsUser.greeting = function(){
    console.log("Helooo all");
}

console.log(jsUser.greeting())






// Singleton

// const instaUser = new Object()
// const instaUser = {}

const instaUser = {}

instaUser.id = "121"
instaUser.name = "Sam"

console.log(instaUser)

const xUser = {
    email : "abd@gmail.com",
    fullname : {
        first : "Lionel",
        last : "Pepsi"
    }
}

console.log(xUser.fullname.last)



const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "c", 4: "d"}

const obj3 = Object.assign(obj1, obj2) // here the result gets added into obj1 , or the first object of the list.
console.log(obj3)
console.log(obj1)

const obj4 = Object.assign({}, obj1, obj2) // Here the result get stored in the new Object, i.e obj4.

// But i'll give you a better one , i.e spread operator
const obj5 = {...obj1, ...obj2}


console.log(Object.keys(xUser))
console.log(Object.values(jsUser))
console.log(Object.entries(xUser))

console.log(xUser.hasOwnProperty("name"))




// De-structuring
const comic = {
    cName : "Doomsday",
    price : "$12",
    lang : "en"
}

const {cName} = comic
console.log(cName)
const {cName : cn} = comic
console.log(cn)

//yo 100th Line 