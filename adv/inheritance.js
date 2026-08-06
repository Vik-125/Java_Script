class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`Username is ${this.userName}.`)
    }
}


class Teacher extends User{
    constructor(userName, email){
        super(userName)

        this.email = email
    }

    addCourse(){
        console.log(`A new course was added by ${this.userName}.`)
    }
}

const avg = new Teacher("Hulk", "www.strongest@gmail.com")

console.log(avg)
avg.logMe()
avg.addCourse()

const gva = new User("Hulk")
console.log(gva)
gva.logMe()

console.log(avg instanceof Teacher)
console.log(User == Teacher)