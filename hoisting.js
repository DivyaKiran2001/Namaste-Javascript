// Hoisting in Javascript

// Hoisting - It is a concept which enables us to extract values of variables and functions
// even before initialising or assigning values without getting
//error and this is happening due to the first phase i.e memory creation phase 
// of the execution context


var x=99;

function getName()
{
    console.log("Namaste Javascript");
}

var getName2 = () =>{
    console.log("Namaste Javascript2");   
}
getName();

console.log(x);
