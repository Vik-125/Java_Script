// Object literal
const user = {
    username : "Vik",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

console.log(user.username);
console.log(user.getUserDetails());



// Constructor function :: (new)
// i.e const obj = new object()
// Before ES6 it was the main way to create object blueprints.
// Now we use class with a constructor method.

function User(username, loginCount){
    this.username = username,
    this.loginCount = loginCount

    return this;
}

const userOne = new User("bun",12)
const userTwo = new User('Drek',1)
console.log(userOne)
console.log(userTwo)
