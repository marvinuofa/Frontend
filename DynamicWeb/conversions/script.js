function cel_to_fahrenheit(){
    var cel = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");

    fahrenheit.value = (cel.value* 9/5) + 32;
   
}
