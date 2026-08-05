function SetUsername(username){
    // for ex : DB Calls
    this.username = username
    console.log("called")
}

function createUser(username, email, pass){
    // call passes the context of diff function to other function , so that the changes made by other function persists in the main function too.
    SetUsername.call(this, username)

    this.email = email,
    this.pass = pass
}

const beep = new createUser("blimp", "www.wwe@gmail.com", "****")
console.log(beep)