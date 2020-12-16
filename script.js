var Adblock = prompt("Please Disable your adblocker and write adblocker to confirm", "adblocker");
if (Adblock !== adblocker) {
Adblock= prompt('Write again');}
else if (Adblock === adblocker) {
console.log('New user choice: ' + userChoice);}

var name = prompt("Please enter your name", "Name");
alert("Welcome to our website "+name) 

var BgImg = prompt('enter a number');
  BgImg = parseInt(BgImg);
  while(isNaN(BgImg)){
    BgImg = prompt('enter a number');}
    function userRequest(){
        var data = '';
        var i =0;
        for(i=0; i<userInput; i++){
            generateImage()
        }
        function generateImage(){
            data += ' <img src="bg.jpg" />'
      }
      return data;
    }
/*
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

alert(greeting);*/
