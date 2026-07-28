// array

const myArr = [1, 2, 3, 4, 5, 6]
const myHeroes = ["Ironman", "Hulk"]
const diffArr = [1, 2, "Vik", "Kali"]

console.log(myArr[0])
console.log(diffArr[3])



// Array methods

myArr.push(19)     // Adds element in the end of the array.
console.log(myArr)


myArr.unshift(9)   // Adds element in the beginning of the array.
myArr.unshift(7)
console.log(myArr)


myArr.shift()      // Removes the first element.
console.log(myArr)

console.log(myArr.includes(19))


const convertArr = myArr.join()   // Convert the array into a string.
console.log(convertArr)
console.log(typeof convertArr)




// slice , splice
console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)


const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("B ", myArr)






const mHeros = ["Thor", "Ironman"]
const dcHeros = ["Superman", "Wonder Woman"]

// mHeroes.push(dcHeros)
// console.log(mHeros)      // Pushes the whole array into another array.

const allHeros = mHeros.concat(dcHeros)         // Adds the two array & store in a new Array.
const allOtherHero = [...mHeros,...dcHeros]     // spread Operator
console.log(allHeros);
console.log(allOtherHero);



const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [8, 9]]]
const real_another_array = another_array.flat(Infinity)
console.log(another_array)
console.log(real_another_array)




console.log(Array.isArray("John wick"))  // check is its an array or not!!
console.log(Array.from("John Wick"))     // Forms an array.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));