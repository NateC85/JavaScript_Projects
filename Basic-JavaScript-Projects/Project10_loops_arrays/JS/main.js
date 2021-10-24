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

var str = "Hellooooooooo World!";
document.getElementById("length").innerHTML = str.length;;

var Fav_pies = ["Pumpkin", "Dutch Apple", "Peach", "Blueberry", "Strawberry Rhubarb"];
var Content = "";
var p;

function for_Loop() {
    for (p = 0; p < Fav_pies.length; p++) {
        Content += Fav_pies[p] + "<br>";
    }
    document.getElementById("List_of_Pies").innerHTML =Content;
}

function cub_Players() {
    var Cubs_Players = [];
    Cubs_Players[0] = "Ryan Sandberg";
    Cubs_Players[1] = "Javier Baez";
    Cubs_Players[2] = "Mark Grace";
    Cubs_Players[3] = "Kerry Wood";
    document.getElementById("Cubbies").innerHTML = "In this picture, is one of my favorite players, " + Cubs_Players[2] + "."; 
}