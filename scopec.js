function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
    }
}

a();

// Lexical environment of a() is - Local memory of a + Lexical environment of its parent i.e global
// Lexical environment of c() is - Local memory of c + Lexical environment of its parent i.e a() + Lexical environment of a() parent i.e global
