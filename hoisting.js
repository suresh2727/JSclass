var a =10;
console.log(a);

//by this example we can conclude that we can't do variable hoisiting in js
console.log(b);
var b = 20;


//In javascript we can hoist only function declaration and we can't hoist function expression
sayhello();
function sayhello() {
    console.log("Hello good morning");
}


//we can't function expression
console.log(res(10,20));
var res = (a,b) =>{
    return a+b;
}


