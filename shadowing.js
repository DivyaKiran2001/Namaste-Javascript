/*
Shadowing - If one has same variable outside the block the variable inside the block 
shadows the outside variable.This is called as Shadowing and this happens only for var

-- > For let and const  the variables are block scoped

*/


//var a=10;

//let b=100;

const c=100;

{
    var a=100;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
