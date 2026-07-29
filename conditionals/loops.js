// For loop

const Array = [1, 7, 3, 5, 2]
for (let index = 0; index < Array.length; index++){
    const element  = Array[index]
    console.log(`The ${index}th element of array is ${element}`)
}

// continue
// break

let i = 1;
while(i < 5){
    console.log(`${i} shot`)
    i++
}

let sc = 1
do{
    console.log("not yet --- ")
    sc++
} while(sc < 5)

console.log("LESSS GOOO")



// For-of   : used for objects in an array.
const arr = [5, 2, 4, 7, 1]
for(const num of arr){
    console.log(num)
}




// For-in loop  ( we can used it for iterating over object.)
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
}
for(const key in myObject){
    console.log(`${key} is short-cut for ${myObject[key]}.`)
}



// For-each loop
const c = ["cpp", "c", "java", "js", "ts"]

c.forEach(function (item) {console.log(item)})




// filter
const myNums = [1, 5, 2, 7, 3, 4]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums)