function cel_to_fahrenheit(){
    var cel = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");

    fahrenheit.value = (cel.value* 9/5) + 32;  
}

function km_to_miles(){
    var km = document.getElementById("kilometers");
    var miles = document.getElementById("miles");

    miles.value = km.value * 0.62137;

    fahrenheit.value = (cel.value* 9/5) + 32;
   
}

function kg_to_lbs(){
    var kg = document.getElementById("kilograms");
    var lbs = document.getElementById("pounds");

    lbs.value = kg.value * 2.2;
}