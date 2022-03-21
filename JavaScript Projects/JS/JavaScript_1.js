function Pizza_Function() { // Using the switch statement(conditional statement)
    var Pizza_Output;
    var Pizzas = document.getElementById("Pizza_Input").value;
    var Pizza_String = " is a delicious choice!";
    switch(Pizzas) {
        case "Pepperoni":
            Pizza_Output = "Pepperoni" + Pizza_String;
        break;
        case "BBQ Chicken":
            Pizza_Output = "BBQ Chicken" + Pizza_String;
        break;
        case "Veggie":
            Pizza_Output + "Veggie" + Pizza_String;
        break;
        case "Margherita":
            Pizza_Output = "Margherita" + Pizza_String;
        break;
        case "Cheese":
            Pizza_Output = "Cheese" + Pizza_String;
        break;
        case "Sausage":
            Pizza_Output = "Sausage" + Pizza_String;
        break;
        case "Surpreme":
            Pizza_Output = "Surpreme" + Pizza_String;
        break;
        default:
        Pizza_Output = "Please enter your choice as written on the list above.";
    }
    document.getElementById("Output").innerHTML = Pizza_Output;
}

// Utilizing the getElementByClassName() method.
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";
}

// Adding graphic within the canvas
var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);

// createLinearGradient() method
var c = document.getElementById("myCanvas");


var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
