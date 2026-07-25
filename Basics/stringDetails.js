const name = "Thor"

console.log(name + " is the strongest god of thunder!!")
// Better way of output is : String interpolation
console.log(`${name} is the strongest god of thunder!!`)

const godName = new String('Thor Odinson')

console.log(godName[0]);
console.log(godName.__proto__);  // gives object

console.log(godName.length)
console.log(godName.toUpperCase());

// & many more methods comes with string object.