function Call_Loop() {
    var cars = ["Dodge", "Audi", "Subaru", "Toyota", "Chevy"];
    var i = 0;
    var text = "";
    while (cars[i]) {
        text += cars[i] + "<br>";
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}