class User{
    constructor(userName, pass){
        this.userName = userName
        this.pass = pass
    }

    get pass(){
        return this._pass.toUpperCase()
    }

    set pass(str){
        this._pass = str
    }
}

const ob = new User("Vik", "123@rew")
console.log(ob.pass)

ob.pass = "qwerty"
console.log(ob.pass)