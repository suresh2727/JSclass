function outer() {
    var city="Bangalore";
    console.log("Outer Functtion "+city);

    function inner() {
        console.log("inner function  " +city);
    }

    return inner();
}
outer();


//example 2 

function outer1() {
    var c = 10;
    function inner1(a,b) {
        var add = a+b+c;   
        console.log(add);   
        
    }

    return inner1;
}

var res = outer1()
res(10,20);

