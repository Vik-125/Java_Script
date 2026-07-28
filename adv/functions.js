function greet(){
    console.log("Hi")
}
greet()

function add(num1, num2){
    console.log(num1 + num2)
}

add(2, 3)
add("A", 1)
add("1", "3")


function addInt(num1, num2){
    return num1 + num2
}
console.log(addInt(1, 9))



function who(name = "Vik"){
    console.log(`I'm ${name}!!`)
}

who();
who("Batman")

// ... is used for making a bundle of the parameters.
function addCart(val1, val2, ...num1){
    return num1
}

console.log(addCart(120, 182, 92, 312))