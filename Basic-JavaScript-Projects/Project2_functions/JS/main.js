function Functions() {
    var str = "I am in orange!" ;
    var result = str.fontcolor("orange") ;
    document.getElementById("Blue_Text").innerHTML = result;
}

function displayDate() {
    document.getElementById("time").innerHTML = Date();
}