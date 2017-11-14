console.log("Up and running!");

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);*/


//var cards = ["queen", "queen", "king", "king"]; => this array replaced with the following array in Unit 10 
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match! You won!");
		} else {
			alert("Not a match. Sorry, try again.");
		};
	};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.className = 'card';
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();

function myFunction() {
    document.getElementById("myForm").reset();
}





//coded edited in Unit 11.
/*var flipCard = function (cardId) {
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);*/

//flipCard(0);
//flipCard(2);
//
//

//the following code is from Unit 8. Removed in Unit 9 Assignment 30%
	/*
	var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);

	var cardTwo = cards[3];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);

	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match! You won");
		} else {
			alert("Not a match. Sorry, try again.");
		};
		*/
//
//
// alert("You found a match! You won!");
// alert("Not a match. You lose!");
