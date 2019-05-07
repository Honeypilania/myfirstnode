
// Print Hello World
console.log('Hello world..!');

// Trying to make object
var user = {
    name:"Honey Pilania",
    age: 23,
    email:"honey.pilania@socwisetechnologies.com"
}

console.log(user); 
console.log(user.name);

// Anonymous function
var person = function(){
    console.log("Hi This is Honey Pilania..!");
}
person();

// Anonymous Function with Arguments
var Add = function(a,b){
    var c = a+b;
    console.log("Addition of A and B = " +c);
}

Add(2,9);

// Arrow function
var user=()=>console.log("This is arrow function");
user();

// Arrow function with Argu..
var add=(a,b)=>{
    var c = a+b;
    console.log("Addition of "+a+ " and " +b+ " = " +c);
}
add(5,12);


//use export module for fetch Data
var name = "Honey Pilania";

module.exports.abc =name;

// let keyword, scope variable
let a=30;
//let a=40;    // you can't define like that..!

// you can define or take inside function because it is scope variable/method
function abc(){
    let a=40;
    console.log(a);
}


console.log(a);

abc();


// const as object and its value can be changed bcz we use it as object

const user1 = {
    name :"Honey Pilania",
    age : 23
}

    user1.email = "honey.pilania@socwisetechnologies.com";

console.log(user1);