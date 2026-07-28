// We don't use var as , it don't have any type of scope & variables initialized with var , can be accessed by anyone , anywhere.

let outer = 12           // Global Scope
if(true){                // Block Scope
    let inner = 21

    console.log(outer)
    console.log(inner)

    outer = 132
    console.log(outer)
}
// inner     can't access outer here.


// Here hoisting is not needed
console.log(addi(2))
function addi(num){
    return num + 2
}


// Here hoisting is needed!!!
const addTwo = function(num){
    return num + 2
}
console.log(addTwo (5))