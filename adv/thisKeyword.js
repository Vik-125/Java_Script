const user = {
    username : "Vik",
    price: 121,

    welcomeMess: function(){
        console.log(this),
        console.log(`${this.username} , welcome!!!`)
    }
}

user.welcomeMess()
console.log(this)        // this gives the refernce of the global object.
// Window is the global object in a browser.



function tea(){
    let un = "bits"
    console.log(this)

    console.log(this.un)
}
tea()

// Arrow Function
const snacks = () => {
    let un = "bits"
    console.log(this)

    console.log(this.un)
}
snacks()


// Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}

// Implicit return
// Here we don't need to use curly braces for returning the output.
const add = (num1, num2) => ( num1 + num2 )


// for returning an Object , we need to use curly braces.
const add = (num1, num2) => ({/* Object */})