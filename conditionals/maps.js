// For-of loop

//Maps : stores unique value only

const map = new Map()
map.set('IN', "india")
map.set('US', "United States")
map.set('Fr', "France")

console.log(map)

for(const [key, value] of map){
    console.log(key, ' :- ', value)
}