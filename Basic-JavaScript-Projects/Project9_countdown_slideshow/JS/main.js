// Defining a function that creates a timer that counts down from number choosen.

function countdown() {
    var seconds = document.getElementById("seconds").value ;
    
    function tick() {
        seconds = seconds -1 ;
        timer.innerHTML = seconds ;
        var time = setTimeout(tick, 1000) ;
        if (seconds == -1) {
            alert("Times up!!") ;
            clearTimeout(time) ;
            timer.innerHTML = "" ;
        }
    }
    tick() ;
}

var slideIndex = 0 ;
showSlides() ;

function showSlides() {
    var i ;
    var slides = document.getElementsByClassName("mySlides") ;
    var dots = document.getElementsByClassName("dot") ;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none" ;
    }
    slideIndex++ ;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "") ;
    }
    slides[slideIndex-1].style.display = "block" ;
    dots[slideIndex-1].className += " active" ;
    setTimeout(showSlides, 3000); // Changes image every 3 seconds
}