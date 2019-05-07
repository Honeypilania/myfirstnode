
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

