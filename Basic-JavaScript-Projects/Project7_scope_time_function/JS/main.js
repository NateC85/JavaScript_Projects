// Using a global variable
var n = 20 ;
function Multiply_1() {
    document.write(25 * n + "<br>") ;
}
function Multiply_2() {
    document.write(2 * n) ;
}
Multiply_1() ;
Multiply_2() ;
// Using a local variable
function Divide_1() {
    var j = 568 ;
    document.write(j / 7) ;
}
document.write("<br>") ;
Divide_1() ;

document.write("<br>") ;

// Using console.log method to debug function
function Divide_2() {
console.log(j / 3) ;
}
Divide_2() ;

document.write("<br>") ;

// Defining a function with an if statement, that uses the Date().getHours() method
function get_Date() {
    if (new Date().getHours() > 12) { // if statement
    document.getElementById("Greeting").innerHTML = "Have a good night!" ; // get.ElementById method to display id "greeting."
    }
}

// 
function Cubs_Function() { // Definning a function
    Choice = document.getElementById("Choice").value ; // 
    if(Choice == "Chicago Cubs") { // if statement
        vote = "GO CUBS GO!!, maybe next year.." ; // block of code to that will be executed if condition is true
    }
    else {  // else statement
        vote = "BOOOOOOOOOOO, but good luck guys!" ; // block of code that will be executed if condition is false
    }
    document.getElementById("Cubs_or_Sox?").innerHTML = vote ;
}

/* This program pulls the hours in a date, using local time
   from your computer. Defines functions & variables, &
   also uses if, else, & else if statments, as well as 
   the Date(), getHoursa(), & getElementById methods. */
function Time_Function() { 
    var Time = new Date().getHours() ;
    var Reply ;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!" ;
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon." ;
    }
    else {
        Reply = "It is evening time." ;
    }
    document.getElementById("Time_of_Day").innerHTML = Reply ;
}



