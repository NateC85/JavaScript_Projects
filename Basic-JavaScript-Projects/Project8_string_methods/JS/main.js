function full_Sentence() {
    var sect_1 = "This course " ;
    var sect_2 = " gets better " ;
    var sect_3 = " & better, every day!" ;
    var complete_Sentence = sect_1.concat(sect_2, sect_3) ;
    document.getElementById("Concatenate").innerHTML = complete_Sentence ;
}

function slice_Method() {
    var Sentence = "I am a leaf on the wind; watch how I soar." ;
    var Section = Sentence.slice(25,44) ;
    document.getElementById("Slice").innerHTML = Section ;
}

// Defining a function. Using the getElementById() and toString() methods to return a number as a string.
function string_Method() {
    var x = 7839 ;
    document.getElementById("Numbers_to_string").innerHTML = x.toString() ;
}

//Defining a function. Using the to.Precision method to format a number to a specified lenght.
function precision_Method() {
    var x = 2345.73465829031 ;
    document.getElementById("Precision").innerHTML = x.toPrecision(6) ;
}

// valueOf() method returns the value of a string, representing the primitive value of a string.
function value_Of_Method() {
    var str = "Cowabunga!!" ;
    document.getElementById("Value_of").innerHTML = str.valueOf() ;
}

// toFixed() method will convert a number to a string, rounding the number to a specified number of decimals.
function to_Fixed_Method() {
    var num = 27.56789 ;
    var n = num.toFixed(3) ;
    document.getElementById("To_fixed").innerHTML = n ;
}