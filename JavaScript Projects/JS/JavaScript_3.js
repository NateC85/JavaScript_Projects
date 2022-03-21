function displayType(car) {
    var carType = car.getAttribute("data-car-type");
    alert(carType + " was a popular car in the " + car.innerHTML + "!");
}