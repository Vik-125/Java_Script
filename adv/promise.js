// A promise(object)  is one of these states :
// ~pending   : Initial state, neither fulfilled nor rejected.
// ~fulfilled : Meaning that the operation was completed successfully
// ~rejected  : Meaning that the operation failed.

// Promises are resolved(fulfilled) (.then()) or rejected.

const promiseOne = new Promise(function(resolve, reject){
    // We can do a async task, like DB calls , cryptography , networking , etc

    setTimeout(function(){
        console.log("Async task is completed!!")
        // connecting it with it's resolve method.
        resolve()
    }, 1000)
})

// Now consumption of promise // runs after resolve is called.
promiseOne.then(function(){
    console.log("promise consumed");
})



// Both in one code!
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Another Async completed")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved!!!")
})



// 3rd promise
const promiseThird = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "koko"})
    }, 1000)
})

promiseThird.then(function(user){
    console.log(user)
})




// 4th One

const fourthPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Dregasssi", password:"123@abc"})
        } else{
            reject('ERROR BRUHHH')
        }
    }, 1000)
})

fourthPromise.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((e) => {
    console.log (e)
}).finally(() => {
    console.log("Code is executed completely.")
})






// Fifth
const fifthPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(error){
            resolve({username : "Dregasssi", password:"123@abc"})
        } else{
            reject('ERROR BRUHHH')
        }
    }, 1000)
})

async function consumePromiseFive(){
    const response = await fifthPromise
    console.log(response)
}

consumePromiseFive()






// we'll get the output of first at first , cause fetch functions are added to a special queue , i.e Micro-task queue/priority queue, which have higher priority & it gets executed first.
async function getDet(){
    try {
        const response = await fetch('https://api.github.com/users/Vik-125')

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getDet()