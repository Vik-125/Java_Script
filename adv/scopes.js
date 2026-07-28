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