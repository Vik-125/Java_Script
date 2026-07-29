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



// for of   : used for objects in an array.
const arr = [5, 2, 4, 7, 1]

for(const num of arr){
    console.log(num)
}