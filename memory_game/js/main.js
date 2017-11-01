console.log("Up and running!");

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);*/


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match! You won!");
		} else {
			alert("Not a match. Sorry, try again.");
		};
	};

var flipCard = function (cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};

flipCard(0);
flipCard(2);



//
//
//following code from Unit 8. Removed in Unit 9 Assignment 30%
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
