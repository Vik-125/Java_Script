// The values which are used as a false value.
// false, 0, -0, BigInt 0n, "", null, undefined, NaN



// Rest all the values are treated as true.
// "0", 'false, " ", [], {}, function(){}



// Nullish Coalescing opr( ?? ) : null underfined
// syn : let val1 = x ?? y      if x is null then y will be assigned to val1.

let val1 = 5 ?? 2
let val2 = null ?? 4 ??
console.log(val1)
console.log(val2)


// Ternary operator
// conditon ? if_true : if_false