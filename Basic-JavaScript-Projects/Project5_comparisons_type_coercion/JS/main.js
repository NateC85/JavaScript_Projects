document.write(typeof false) ; // Using document.write method & typeof operator to display a variable of your choosing (string, number, boolean).
document.write("</br>") ;
       
document.write(typeof 75) ;
document.write("</br>") ;

document.write(typeof "turtles") ;
document.write("</br>") ;

document.write("36" + 5) ; 
document.write("</br>") ;  /* Using type coercion to 
                            concatenate different data types. */
document.write(36 + "5") ;
document.write("</br>") ;

function not_A_Num() {
    document.getElementById("NaN").innerHTML = 0/0 ;  // creating functions to determine wether or not something is a number and display: NaN(Not a Number), or "true" or "false."
}  
    
                                                                                           
function is_Nan_T() {   
document.getElementById("true").innerHTML = isNaN("Here we have a string") ;
}

function is_Nan_F() {
    document.getElementById("false").innerHTML = isNaN("365") ;
}

document.write(4E310) ; // displays infinity, because the number is higher than our maximum floating point number.
document.write("</br>") ;

document.write(-4E310) ; // Displays -infinity, because the number is lower than -1.79769313482623157E308.
document.write("</br>") ;

document.write(84 > 93) ; // Determines if the left number is greater than the right number, & displays "true" or "false."
document.write("</br>") ;

document.write(954 <= 1000) ; // Determines if the left number is less than and or equal to the right number, & displays "true" or "false."

console.log(57 * 4) ; // Using the console.log method to display data in the console within the browser.
console.log(75 < 24) ;

document.write("</br>") ;
document.write(25 * 3 == 75) ;  /* Using the double equals symbol to check for equality.
                                 First we are checking if 25*3 is equal to 75, 
                                  Second we are checking if 34 is equal to 45. */
document.write("</br>") ;       
document.write( 34 == 45) ;

document.write("</br>") ;

x = "I'm learning JavaScript!"  // Returns true by ensuring the data type & value match. 
y = "I'm learning JavaScript!"    
document.write(x === y) ;

document.write("</br>") ;

j = "Jovanni"              // Return false by writing a different data type and different value. 
o =  645                         
document.write(j === o) ;      
document.write("</br>") ;

h = 73                     // Return false by writing a different data type but the same value for both. 
k = "73"                     
document.write(h === k) ; 
document.write("</br>") ;

d = 34                       // Returns false by writing the same data type but a different value for both. 
c = 85                         
document.write(d === c) ;
document.write("</br>") ;

document.write(23 < 30 && 16 > 4) ; // Using the AND operator to determine the logic between values & variables, Both must be true to display true.
document.write("</br>") ;
document.write(34 < 43 && 43 < 34) ;

document.write("</br>") ;

document.write(40 > 30 || 50 > 90) ; // Using the OR operator to determine if either is true, either one can be true to display true.
document.write("</br>") ;
document.write(6 > 20 || 75 < 10) ;

function not_Function() {
document.getElementById("Not").innerHTML = !(57 < 50) ;
}
                                                                    // Using the NOT operator to check whether or not something is true.
function not_Function_2() {
document.getElementById("Not_2").innerHTML = !(40 > 30) ;
}