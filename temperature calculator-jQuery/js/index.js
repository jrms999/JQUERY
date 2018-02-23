function getTempF() {
var celsius = document.getElementById("Celsius").value;
  if (isNaN(celsius) === true) {
    alert("Give me a number, please!");
  } else {
  var fahrenheit = (celsius * 1.8) + 32;
document.getElementById("result1").innerHTML = 
fahrenheit.toFixed(2) + " &deg;F";
}}

function getTempC(){
var fahrenheit = document.getElementById("Fahrenheit").value;

  if (isNaN(fahrenheit) === true) {
    alert("Give me a number, please!");
  } else {
  var celsius = (fahrenheit - 32) / 1.8;
  
  
document.getElementById("result2").innerHTML = 
celsius.toFixed(2) + " &deg;C";
}};