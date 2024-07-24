var obj1 = {
    name : 'suresh',
    age: 24,
    city: "silvassa"
}

console.log(obj1);

var obj2  = {
    ...obj1,
    id: 18,
    gender:"male"

}

console.log(obj2);


var arr1 = [10,20,30,40]

console.log(arr1);

//adding arr1 to arr2
var arr2 = [...arr1 , 50,60,70,80,90]
console.log(arr2); 