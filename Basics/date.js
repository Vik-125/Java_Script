// Dates

let myDate = new Date()
console.log(typeof myDate)

console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())


// The month starts with index 0 , i.e January - 0, February - 1
// year - month - day - time - etc
// let createDate = new Date(2026, 6, 26)
// let createDate = new Date(2023, 0, 23, 5, 3)
let createDate = new Date("2023-01-23")

console.log(createDate.toLocaleString())


let currentTime = Date.now() // Gives the mili-second value.
console.log(currentTime) 
console.log(createDate.getTime())

console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getDate())

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate)