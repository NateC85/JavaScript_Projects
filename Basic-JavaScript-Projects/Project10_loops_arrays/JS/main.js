function Call_Loop() { // Defining a function.
    var cars = ["Dodge", "Audi", "Subaru", "Toyota", "Chevy"]; // Declaring a variable
    var i = 0;
    var text = "";
    while (cars[i]) { // Using the while conditional statement
        text += cars[i] + "<br>";
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}
// Using the str.lenth property to return the length of a string.
var str = "Hellooooooooo World!";
document.getElementById("length").innerHTML = str.length;;

// Example of a for loop.
var Fav_pies = ["Pumpkin", "Dutch Apple", "Peach", "Blueberry", "Strawberry Rhubarb"];
var Content = "";
var p;

function for_Loop() {
    for (p = 0; p < Fav_pies.length; p++) {
        Content += Fav_pies[p] + "<br>";
    }
    document.getElementById("List_of_Pies").innerHTML =Content;
}

// Example of an array
function cub_Players() {
    var Cubs_Players = [];
    Cubs_Players[0] = "Ryan Sandberg";
    Cubs_Players[1] = "Javier Baez";
    Cubs_Players[2] = "Mark Grace";
    Cubs_Players[3] = "Kerry Wood";
    document.getElementById("Cubbies").innerHTML = "In this picture, is one of my favorite players, " + Cubs_Players[2] + "."; 
}

// Using the const keyword to create a "constant" with a local scope, to the block in which it is declared.
function constant_function() {
    const Gaming_Console = {type: "home console", brand: "PS5", Color: "black"};
    Gaming_Console.brand = "AlienWare PC"; // Changing the property brand's value
    Gaming_Console.price = "$1,200-$5,000"; // Adding a property to our constant.
    document.getElementById("Constant").innerHTML = "The cost of a " + Gaming_Console.brand + " can run anywhere around " + Gaming_Console.price;
}

// Utilizing the let keyword to declare variables that can have block scope.
var n = 35;
document.write(n);
{
    let n = 24;
    document.write("<br>" + n);
}
document.write("<br>" + n);

var n = myFunction(35, 7); // Calling function, return value will end up in n.

function myFunction(a, b) {
    return a * b; // Function returns product of a & b
}

// Creating an object, using the let keyword.
let dog = {
    breed: "Rottweiler",
    color: "black and brown",
    age: "3 years old"
    description: function() {
        return "This dog is " + this.age + this.color + this.breed;
    }
};
document.getElementById("Dog_Object").innerHTML = dog.description();