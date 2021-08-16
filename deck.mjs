
const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
]

export default class Deck { //Anything that deals with a pile of cards gets contained within the class deck
  constructor(cards = freshDeck()) {
    this.cards = cards
  }

  get numberOfCards() {
    return this.cards.length
  }

  pop() {
    return this.cards.shift()
  }

  push(card) {
    this.cards.push(card)
  }

 get numberOfCards(){ 
   let numberOfCardsLength = this.cards.length;
   return numberOfCardsLength;
   //return this.cards.length;
 }
  shuffle () {
    //Goes from the back of the array for the list of cards to the front of the array of the list cards
    //constantly taking whatever card that we are on and flipping it with another card that comes earlier in the deck that we haven't gotten to yet
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      
      const newIndex = Math.floor(Math.random() * (i + 1))
      // gets random index before current card we are on 
      //gets the new index for where we are going to put the card so we get a random inex from the array then we currently are
      //Math.floor makes sure that it's an integer Math.random returns a random number lower than 1
      const oldValue = this.cards[newIndex]
      // const oldValue flips the values at the old index with the current index
      // in order to do that we need to get the old value that is at our index currently
      // oldValue is going to be the card at newIndex
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
  }

  

class Card 
//Use the keyword class to create a class.
//Always add a method named constructor(): when using class keyword

{
  constructor(suit, value) { //creates a constructor with two variables to be read named suit and value
    this.suit = suit  //this refers to the global object
    this.value = value
    

    //The constructor sets suit = suit value and value = value of value
  }
  
  

  get color() 
  //Gets color of the suit
  {
    
    
    return this.suit === "♣" || this.suit === "♠" ? "black" : "red" //checks if card is spade or club suit and returns the color of card black if not return red
    
    
    
  }
   
  get colorBlue(){

    let y = new Deck
    let computerCardSlot2 = document.querySelector('.dealer-hand-card-2')
    let x = computerCardSlot2.appendChild(y.cards[3].getHTML());
    return x.suit === "♣" || x.suit === "♠" ? "blue" : "blue"
  }
  
  getHTML() {
   const cardDiv = document.createElement("div") //Creates a elemenent specified by the tag name 
   cardDiv.innerText = this.value + this.suit   //renders text inside of card
   cardDiv.classList.add("card", this.color) //this pulls from the card class and uses the function color() to get the color of the current card
   cardDiv.dataset.value = `${this.value} ${this.suit}` //sets the div  to the cards value and the suits value
   
   return cardDiv
        
      
    
    
}




getHTML2(){
 const cardDiv2 = document.createElement("div2")
 cardDiv2.innerText = ''
 cardDiv2.classList.add("card", this.colorBlue)
 cardDiv2.dataset.value = `${this.value} ${this.suit}`
 return cardDiv2


}

getCValue(){
  if (this.value == 'J' || 'Q' || 'K'){
     return [10];

  } else if (this.value === " ace"){
    return [1,11];
  } else{
    return parseInt(this.value)
  }
}
  

 
  

}



function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value)
       
    })
  })
 
}
/*
let x = new Deck
x.shuffle()
let y = JSON.stringify(x.cards[3]);
console.log(x);
console.log('This is the fourth card in the array ' + y);
*/

























