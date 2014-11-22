var suits = ["hearts","diamonds","clubs","spades"];
var num = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
var deck = [];
// var newDeck



//CREATING THE DECK
for (i = 0; i < num.length; i++) {
	var z = 0;

	for (z = 0; z < suits.length; z++) {
		var x = num[i] + "-" + suits[z];
		
		deck.push(x);

	}
}
console.log(deck);
//-------------------------------

//SHUFFLING THE DECK

touch



//---------------------------------

// var cardRandomA = deck[Math.floor(Math.random()*(deck.length-1)+1)];
// var cardRandomB = deck[Math.floor(Math.random()*(deck.length-1)+1)];
// var cardRandomC = deck[Math.floor(Math.random()*(deck.length-1)+1)];



//DEALING THE CARDS
for (i=0; i< numbers.length; i ++){
  for (i=0; i<3; i++){
    var chosen = Math.floor(numbers.length*Math.random());
    var deal = numbers[chosen];
    console.log(deal);
    numbers.splice(chosen, 1);
  }
  console.log(numbers)
}
//------------------------------






//random card A
if (cardRandomA.charAt(0) === "J" || cardRandomA.charAt(0) === "K" || cardRandomA.charAt(0) === "Q") {
		cardValueA = parseInt(10);
		console.log(cardRandomA);
	} 
	else if (cardRandomA.charAt(0) === "1"){
			cardValueA = parseInt(10);
			console.log(cardRandomA);
	}
	else if (cardRandomA.charAt(0) === "A"){
		cardValueA = parseInt(1);
		console.log(cardRandomA);
	} 
	else {
		cardValueA = parseInt(cardRandomA.charAt(0));
		console.log(cardRandomA);
	}


//random Card B
	if (cardRandomB.charAt(0) === "J" || cardRandomB.charAt(0) === "K" || cardRandomB.charAt(0) === "Q") {
			cardValueB = parseInt(10);
			console.log(cardRandomB);
		} 
		else if (cardRandomB.charAt(0) === "1"){
			cardValueB = parseInt(10);
			console.log(cardRandomB);
		}
		else if (cardRandomB.charAt(0) === "A"){
			cardValueB = parseInt(1);
			console.log(cardRandomB);
		} 
		else {
			cardValueB = parseInt(cardRandomB.charAt(0));
			console.log(cardRandomB);
		}

//random Card C
if (cardRandomC.charAt(0) === "J" || cardRandomC.charAt(0) === "K" || cardRandomC.charAt(0) === "Q") {
		cardValueC = parseInt(10);
		console.log(cardRandomC);
	} 
	else if (cardRandomC.charAt(0) === "1"){
		cardValueC = parseInt(10);
		console.log(cardRandomC);
	}
	else if (cardRandomC.charAt(0) === "A"){
		cardValueC = parseInt(1);
		console.log(cardRandomC);
	} 
	else {
		cardValueC = parseInt(cardRandomC.charAt(0));
		console.log(cardRandomC);
	}

var handValue = (cardValueA + cardValueB + cardValueC);


if (handValue > 21 ) {
	console.log(handValue);
	console.log("BUST");
}
else if (handValue === 21) {
	console.log(handValue);
	console.log("BLACKJACK");
}
else {
	console.log(handValue);
}









