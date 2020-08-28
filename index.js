function generateRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function placeImageInElement(imageNumber, imageElement) {
    imageElement.setAttribute("src", "images/dice" + imageNumber + ".png");
}
var randomNumber1 = generateRandomDiceNumber();
var randomNumber2 = generateRandomDiceNumber();
placeImageInElement(randomNumber1, document.querySelector("img.img1"));
placeImageInElement(randomNumber2, document.querySelector("img.img2"));

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}