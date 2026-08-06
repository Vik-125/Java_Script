const User = {
    _email : "jknf",
    _pass : "dsfcc",

    get email(){
        return this._email
    },

    set email(value){
        this._email = value
    }
}

const t = Object.create(User)
console.log(t._email)