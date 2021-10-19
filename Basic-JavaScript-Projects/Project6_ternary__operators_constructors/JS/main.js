function Ride_Function() {
    var Height, Can_ride ;
    Height = document.getElementById("Height").value ;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough" ;
    document.getElementById("Ride").innerHTML = Can_ride + " to ride." ;
}

/* Using an object constructor with a 
   funtion that will tell you if you are 
   old enough or not old enough to vote. Creating 
   variables and setting values.
   Also using the getElementById method to return element object,
   matchig a specified id property. */

function Vote_Function() { 
    var Age, Can_Vote ; 
    Age = document.getElementById("Age").value ;  
    Can_Vote = (Age < 18) ? "You are not old enough":"You are old enough" ;
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote!!" ;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make ;
    this.Vehicle_Model = Model ;
    this.Vehicle_Year = Year ;
    this.Vehicle_Color = Color ;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red") ;
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black") ;
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard") ;

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

    /* Defining a function, with an object constructor.
   Using the "this" keyword to indicate the object that
   is the owner of the code */
function Shoes(Make, Color, Style, Year) {
    this.Shoes_Make = Make ;
    this.Shoes_Color = Color ;
    this.Shoes_Style = Style ;
    this.Shoes_Year = Year ; 
}

    // Creating variables and using the "new" keyword to create new objects
var Ollie = new Shoes("Adidas", "Red and Blue", "Skate", 2021) ;
var Jovanni = new Shoes("Nike", "Black", "Running shoe", 2021) ;
var Nate = new Shoes("New Balance", "Gray and Orange", "Dad shoes", 2021) ;
function shoe_Function() {
    document.getElementById("New_and_This").innerHTML = "Nate wears " + Nate.Shoes_Color + "-colored " + Nate.Shoes_Style + " made by " + Nate.Shoes_Make + "." ;
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count() ;
function Count() {
    var Starting_point = 14 ;
    function Plus_1() {Starting_point += 2;} // Nested function
    Plus_1() ;
    return Starting_point ;
    }
}