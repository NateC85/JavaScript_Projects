function functions() { // Defining & naming a function
    var str = "I am in orange!" ; // Defining a variable & giving it a string value
    var result = str.fontcolor("orange") ; /* Stops the execution of a function and returns a value from that 
    function/Changes the font color of the string */
    document.getElementById("Blue_Text").innerHTML = result ; // Returns an element, and modifies the content of the HTML element
}

function displayDate() { // Defining & naming a function
    document.getElementById("time").innerHTML = Date() ; /* Changes the content of the element with id = time,
    changes the content of its own element (using this.innerHTML) */
}

function myFunction() { // Defining & naming a function
    var sentence = "I have been" ; // Defining a variable & giving it a string value
    sentence += " so much exciting information!" ; // Using our variable & += operator to concatenate the strings
    document.getElementById("Concatenate").innerHTML = sentence ;
}