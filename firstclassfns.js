/* Function Statement aka Function Declaration

function a(){
    console.log("a called");
}

*/

/* Function Expression

var b=function(){
    console.log("a called");
} 

*/

/* Anonymous Function - Function without a name
*/

/* Named Function Expression 

Same as function expression but function has a name
instead of being anonymous

var b=function abc(){
    console.log("a called");
} 


*/


/* First Class Functions
    We can pass functions inside a function as 
    arguments and/or return a function.These abilities are
    together known as First Class Fucntions.


(i) Passing a function

var b = function(param1){
    console.log(param1);
}
b(function() {})

(ii) Returning a function

var b=function(param1) {
    return function xyz() {}
}
console.log(b());

*/


