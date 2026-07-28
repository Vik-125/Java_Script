// Immediately Invoked Function Expressions ( IIFE )
// Function which gets executed immediately  & to remove the issue of global pollution.

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`)
}) ();        // Semicolon is require here as, there is one more IIFE below.


// unamed IIFE
((/*paramerters*/) => {
    console.log(`DB CONNECTED 2`)
}) ()