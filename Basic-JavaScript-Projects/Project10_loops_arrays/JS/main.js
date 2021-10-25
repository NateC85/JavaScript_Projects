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

function constant_function() {
    const Gaming_Console = {type: "home console", brand: "PS5", Color: "black"};
    Gaming_Console.brand = "AlienWare PC";
    Gaming_Console.price = "$1,200-$5,000";
    document.getElementById("Constant").innerHTML = "The cost of a " + Gaming_Console.brand + " can run anywhere around " + Gaming_Console.price;
}