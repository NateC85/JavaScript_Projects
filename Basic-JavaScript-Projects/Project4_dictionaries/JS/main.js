function my_Dict() { // defining a function & creating a dictionary
    var Movies = { // creating a variable & accessing  the dictionary using its keys
        Type: "Sci-Fi", // type: string
        Name: "Serenity", // type: string
        Setting: "Space/distant future", // type: string
        Release_Date: 2005,  // type: integer
    };
    delete Movies.Name ; // deletes a value from dictionary(Name)
    document.getElementById("Dictionary").innerHTML = Movies.Name ; // Returns an element, and modifies the content of the HTML element
}