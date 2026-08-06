// static is used for making a function private , & not accessible to outer world.


class User{
    constructor(username){
        this.username = username
    }

    static logMe(){
        console.log(`Username: ${this.username}`)
    }

    createId(){
        return `123`
    }
}

const ik = new User("Vik")
console.log(ik.createId())