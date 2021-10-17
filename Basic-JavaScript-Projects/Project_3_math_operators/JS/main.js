function addition_Function() { // defining a function
    var addition = 65 + 35 ; // creates a variable & passes two numbers to be added
    document.getElementById("Math").innerHTML = "65 + 35 = " + addition ;  // Returns an element, and modifies the content of the HTML element
}

function subtraction_Function() { // defining a function
    var subtraction = 3478 - 7389 ; // creates a variable & passes two numbers to be subtracted
    document.getElementById("Math_2").innerHTML = "3478 - 7389 = " + subtraction ;  // Returns an element, and modifies the content of the HTML element
}

function multiply() { // defining a function
    var muti_Ply = 73 * 84 ; // creates a variable & passes two numbers to be multiplied
    document.getElementById("Math_3").innerHTML = "73 * 84 = " + muti_Ply ;  // Returns an element, and modifies the content of the HTML element
}

function division() { // defining a function
    var di_Vide = 8975 / 25 ; // creates a variable & passes two numbers to be divided
    document.getElementById("Math_4").innerHTML = "8975 / 25 = " + di_Vide ;  // Returns an element, and modifies the content of the HTML element
}

function multi_Operations() { // defining a function
    var multi_ops = (654 + 543) * 25 / 2 - 65 ; // creates a variable & creates multiple operation
    document.getElementById("Math_5").innerHTML = "654 plus 543, mutiplied by 25, divided in half & then subtracted by 65 equals " + multi_ops ;  // Returns an element, and modifies the content of the HTML element
}

function modulus_Operator() { // defining a function
    var modulus = 857 % 5 ; // creates a variable & passes two numbers & uses the remainder operator to display the remainder
    document.getElementById("Math_6").innerHTML = "When you divide 857 by 5 you have a remainder of: " + modulus ;  // Returns an element, and modifies the content of the HTML element
}

function negation_Operator() { // defining a function
    var a = 74 ; // creates a variable & passes a number value
    document.getElementById("Math_7").innerHTML = -a ;  // Returns an element, and modifies the content of the HTML element
}


var n = 75 ; // creates a variable & passes a number value
n++ ; // uses the increment operator to count one step up from the value of the variable
document.write(n) ; // displays the result(76)


var g = 43 ; // creates a variable & passes a number value
g-- ;  // uses the decrement operator to count one step down from the value of the variable
document.write(g) ; // displays the result(42)

window.alert(Math.random() * 50) ; // uses the Math method random to display a random number from 0 - 50 in an alert window

window.alert(Math.pow(25, 4)) ; // uses the Math method power(pow) to the result of 25 to the power of 4 in an alert window
