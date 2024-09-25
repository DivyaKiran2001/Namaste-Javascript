
//closure - It is a function that has access
// to its outer function scope even after the function has returned




// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     //y();
//     return y;
// }
// var z=x();
// console.log(z);
// z();

function z(){
    var b=900;
    function x() {
        var a=7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();
