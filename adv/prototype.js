// Function is a function as well as a Object.
function multipltBy5(num){
    return num*5
}

multipltBy5.power = 2

console.log(multipltBy5(5))
console.log(multipltBy5.power)
console.log(multipltBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`The score of ${this.username} is ${this.score}!!`)
}
const Muhller = new createUser("Muhller", 21)
const ney = new createUser("naymar", 120)

Muhller.printMe()
ney.printMe()



// making a method for finding the true length of a string , without using multiple other methods.
let myName = "Derek    "

String.prototype.truelength = function(){
    console.log(this.trim().length)
}
myName.truelength()

let myHeros = ["Hulk", "Thor"]

let heroPower = {
    thor: "Thunder",
    hulk: "Strength",

    getSpiderPower: function(){
        console.log(`Spidy sense`)
    }
}

// Adding user-defined prototype in a object.
// Now this prototype is present in all array, object, string, etc.
// We've added the prototype to an object , so it's available to all array , obj, string.
Object.prototype.Power = function(){
    console.log(`Power is present in all Objects!`)
}
heroPower.Power()
myHeros.Power()


// Let us now check , what if we add a prototype to an array, & if it becomes available for all other,like object, string.
Array.prototype.check = function(){
    console.log("Voila.")
}
// So , no it don't get added to the object's prototype.
myHeros.check()
//heroPower.check()