var Adblock = prompt("Please Disable your adblocker and write adblocker to confirm", "write adblocker to confirm");
if (Adblock !== adblocker) {
Adblock= prompt('Select again.');}


var name = prompt("Please enter your name", "Name");
alert("Welcome to our website "+name)

var today= new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18 ) {
greeting= 'Good evening!'}
else if (hourNow > 12) {
greeting = 'Good afternoon!'}
else if (hourNow > 0) {
greeting = 'Good morning!'}
else {
greeting = 'Welcome!'}

alert(greeting);
