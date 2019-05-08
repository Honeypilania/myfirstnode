
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


// you will be alos use replace + operator like that...


   var  name ="Honey Pilania";
   var  age = 23;


console.log(`Hi ${name} your age is ${age}`);

// class and constructor

class User{
        constructor(name,age,email)
        {
            this.name = name;
            this.age = age;
            this.email = email;
        }

        getname(){
            return this.name;
        }
        getage(){
            return this.age;
        }
        getemail(){
            return this.email;
        }
}

    var user = new User("Honey","23","honeypilania666@gmail.com");
    console.log(user.getname());

    // prototype means you can add property and method in parent method with help of child method
    // As we use in oops inherit the class here we use prototype in node.

   var student = function(){
       this.name = 'name';
       this.age = 'age';
   }

   student.prototype={
       getname: function(){
        return this.name;
       }
   }
 var students = new student;
   console.log(students.name);

   //Imoporting Modules Functionality from addition.js

   var module1 = require("./addition");

   console.log(module1.add());


    console.log(module1.add1());

   console.log(module1.add2());

   var httpserver = require("./httpservermodule.js");
   var filesystem = require("./filesystem.js");