// ES6

class User{
    constructor(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chic = new User('KfC',"www.kfc@roast.com","**" )
console.log(chic)
console.log(chic.changeUserName())
console.log(chic.encryptPassword())
