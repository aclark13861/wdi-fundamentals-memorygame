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

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!")
	else {
		alert("Sorry, try again");
		}
		};


function flipCard(cardId){
	console.log("User Flipped " + cards1[cardId])};
	flipCard(0)
	flipCard(2);

	checkForMatch();


	


			
	


		
