console.log("Up and running!");

const cards = [{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",

}
];


let cardId;
cards1 = ["queen","queen","king","king"];
let cardsInPlay = [];
var cardOne = cards1[0];
var cardTwo = cards1[2];

cardsInPlay.push('cardOne');
	console.log("User flipped queen");
cardsInPlay.push('cardTwo');
	console.log("User flipped king");

	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!")
	else {
		alert("Sorry, try again");
		};
	

var flipCard = function(cardId){
	flipCard(0);
	flipCard(2);

	console.log("User Flipped " + cards[cardId].rank);

	};
			
	


		
