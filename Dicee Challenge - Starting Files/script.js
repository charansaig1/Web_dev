var randomNumber1=Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //dice2 

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩player1 win !";
}
//if 1 win
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML= "player2 win!🚩";
}
// if 2 win
else{
    document.querySelector("h1").innerHTML="! Draw";
}

//if deaw