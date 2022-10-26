var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomdiceImage = "dice" + randomNumber1 +".png";

var randomimagesource= "images/" + randomdiceImage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);


var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomimagesource2= "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML="🙂Player 1 is wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h2").innerHTML="Player 2 is wins!🙂"
}
else{
    document.querySelector("h2").innerHTML="🙂Drow!🙂"

}