// let person = {
//     name:"suresh",
//     age : 35,
//     gender : "male",
//     address :{
//         state: "DNH",
//         city: "silvassa",
//         pincode: 400001,
//         area:{
//             main: "Gokul darshan",
//             cross: "opp canara",
//             flat_No: "c 19"
//         }
//     }
// }

// console.log(person);
// console.log(person.address.city);
// console.log(person.address.area.flat_No);

// person.address.city = "Bangalore"
// person.address['state'] = "KA"
// person.address['pincode'] = 560084

// console.log(person.address);

// delete person.address.area.cross
// console.log(person.address.area);



// function inside a key value pairs


var person = {
    name:"Suresh",
    age : 35,
    city : "Mumbai",
    play : function(){
        console.log(this.name + " is playing");
    }
}

person.play()
let keys = Object.keys(person)
console.log(
    keys
);

let values = Object.values(person)
console.log(values);