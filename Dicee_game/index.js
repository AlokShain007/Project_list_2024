// alert("js is working")

var randomeNumber1 = Math.floor(Math.random()*6) +1 ;
var randomDiceImage = 'dice' + randomeNumber1 + ".png";

var randomDiceImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImageSource)


var randomeNumber2 = Math.floor(Math.random()*6) + 1 ;
var randomDiceImage2 = "images/" + "dice" + randomeNumber2 + ".png"

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src",randomDiceImage2)


if (randomeNumber1 > randomeNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! ";
}
else if (randomeNumber1 < randomeNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins !";

}
else {
    document.querySelector("h1").innerHTML = "Draw" ;
}
