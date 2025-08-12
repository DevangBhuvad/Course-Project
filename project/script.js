function temperature(){
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}

function weight(){
    var kg = document.getElementById("kilograms").value;
    var p = kg * 2.20462
    document.getElementById("pounds").value = p
}

function distance(){
    var km = document.getElementById("kilometers").value;
    var m = km * 0.621371
    document.getElementById("miles").value = m
}