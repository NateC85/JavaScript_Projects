function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let x = document.forms["myForm"]["lname"].value;
    let x = document.forms["myForm"]["country"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}