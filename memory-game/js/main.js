console.log("Up and running!");
var rank
var suit
var cardImage

const cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png',
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png',
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png',
}
];


let cardId;
let cardsInPlay = [];
	cardsInPlay.push( cards[0].rank);

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!")
	else {
		alert("Sorry, try again");
		}
		};


function flipCard(cardId){
	console.log("User Flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit)};

	flipCard(0)
	flipCard(2);

	checkForMatch();


	


			
	


		
