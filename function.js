// function add() {
//     var num1 = 10
//     var num2 = 30

//     console.log(num1+num2)
// }

// add();


// function details(name,age,city){
//     console.log(name)
//     console.log(age)
//     console.log(city)
// }

// details("suresh", 34 , "silvassa")


// function add(x,y) {
//     var b = x+y;

//     console.log(b)
// }

// add(12,3)
// add(12)


//Return function

// function wish() {
//     return "Good Morning";
// }

// var res = wish();

// console.log(res);


// function add(x,y) {
//     var result = x+y;
//     return result;
// }

// var results = add(12,13)
// console.log(results);


// function  sub() {
//     var a = 90;
//     let b = 20;
//     var re = a-b;
//     return re

// }

// console.log(sub());




//Anonynomous function

// var a = function () {
//     console.log("Hello world");
// }

// a();


// var b = function (x,y) {
//     let sum = x+y;
//     console.log(sum);
// }

// b(10,20)

// var c = function () {
//     return "Return Function";
// }

// console.log(c());


//Example for callback and highorder

// function print(params) {
//     console.log("Welcome to Js class");
// }

// function add(x,y) {
//     var result = x+y;
//     console.log(result);
// }

// function fun(f) {
//     f();
// }

// fun(function () {
//     var city="bangalore";
//     console.log(city);
// })


//Arrow Function 

// var c =()=>{
//     console.log("Hello world");
// }
// c();

// let d = (x,y)=>{
//     console.log(x+y);
// }
// d(10,20)

// let e = ()=>console.log("Hello One line");
// e()


// var wish = () =>{
//     return "Hello return"
// }

// console.log(wish());


//Immediately invoked function express(IIFE's)

// (function () {
//     console.log("IIFE's");
// })()


// (function (name,age) {  
//     console.log(name);
//     console.log(age);
    
// })("suresh",25)


//Async function example

async function fetchdata() {
    let response = await fetch('https://fakestoreapi.com/products/')
    let data = await response.json()
    console.log(data);
}
fetchdata()







