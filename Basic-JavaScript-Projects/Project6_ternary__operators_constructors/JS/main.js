function Ride_Function() {
    var Height, Can_ride ;
    Height = document.getElementById("Height").value ;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough" ;
    document.getElementById("Ride").innerHTML = Can_ride + " to ride." ;
}

function Vote_Function() {
    var Age, Can_Vote ;
    Age = document.getElementById("Age").value ;
    Can_Vote = (Age < 18) ? "You are not old enough":"You are old enough" ;
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote!!" ;
}