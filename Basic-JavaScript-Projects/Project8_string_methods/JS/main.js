function full_Sentence() {
    var sect_1 = "This course " ;
    var sect_2 = " gets better " ;
    var sect_3 = " & better, every day!" ;
    var complete_Sentence = sect_1.concat(sect_2, sect_3) ;
    document.getElementById("Concatenate").innerHTML = complete_Sentence ;
}