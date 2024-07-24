var person = {
    name: "suresh",
    age: 24 ,
    city: "silvassa",
    gender: "male"
}

//old approach

// var name = person.name;
// var age = person.age;
// var city = person.city;
// var gender = person.gender;

//console.log(name , age , city , gender);


//New approach 
//mostly we are using new approach
let{name,age,city,gender} = person;
console.log(name,age,city,gender);


//Array destructing

var arr = [10,20,304,50];
//old approach
// var ele1=arr[0];
// var ele2=arr[1];
// var ele3 = arr[2];

// console.log(ele1+ele2+ele3);


let[ele1,ele2,ele3] = arr;

console.log(ele1-ele2+ele3);

