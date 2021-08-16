import Deck from "./deck.mjs"


const computerCardSlot = document.querySelector('.dealer-hand')
const computerCardSlot2 = document.querySelector('.dealer-hand-card-2')
const computerCardSlot2FaceDown = document.querySelector('.dealer-hand-card-2-face-down')
const computerCardSlot3 = document.querySelector('.dealer-hand-card-3')
const computerCardSlot4 = document.querySelector('.dealer-hand-card-4')
const computerCardSlot5 = document.querySelector('.dealer-hand-card-5')
const computerCardSlot6 = document.querySelector('.player-1-hand')
const computerCardSlot7 = document.querySelector('.player-1-hand2')
const computerCardSlot8 = document.querySelector('.player-1-hand3')
const computerCardSlot9 = document.querySelector('.player-1-hand4')
const computerCardSlot10 = document.querySelector('.player-1-hand5')
const hit = document.querySelector('.btn-hit')
const deal = document.querySelector('.btn-deal')
const deck = new Deck();






/*
computerCardSlot.appendChild(deck.cards[0].getHTML());
computerCardSlot2.appendChild(deck.cards[1].getHTML());
computerCardSlot3.appendChild(deck.cards[2].getHTML());
computerCardSlot4.appendChild(deck.cards[3].getHTML());
computerCardSlot5.appendChild(deck.cards[4].getHTML());
computerCardSlot6.appendChild(deck.cards[5].getHTML());
computerCardSlot7.appendChild(deck.cards[6].getHTML());
computerCardSlot8.appendChild(deck.cards[7].getHTML());
computerCardSlot9.appendChild(deck.cards[8].getHTML());
computerCardSlot10.appendChild(deck.cards[9].getHTML());
console.log("Card 1")
console.log(deck.cards[0]);
console.log("Card 2")
console.log(deck.cards[1]);
console.log("Card 3")
console.log(deck.cards[2]);
console.log("Card 4")
console.log(deck.cards[3]);
console.log("Card 5")
console.log(deck.cards[4]);
console.log("Card 6")
console.log(deck.cards[5]);
console.log("Card 7")
console.log(deck.cards[6]);
console.log("Card 8")
console.log(deck.cards[7]);
console.log("Card 9")
console.log(deck.cards[8]);
console.log("Card 10")
console.log(deck.cards[9]);
*/

/*function getCardVal(cvalue=''){
    
    switch(cvalue){
    case 'A':
        return 1;
        case '2':
        return 2;
        case '3':
        return 3;
        case '4':
        return 4;
        case '5':
        return 5;
        case '6':
        return 6;
        case '7':
        return 7;
        case '8':
        return 8;
        case '9':
        return 9;
        default:
        return 10;
    }  
  }*/

  
  

document.querySelector('.btn-deal').addEventListener("click", function(){
deck.shuffle();

computerCardSlot6.appendChild(deck.cards[0].getHTML());
computerCardSlot7.appendChild(deck.cards[1].getHTML());
computerCardSlot.appendChild(deck.cards[2].getHTML());
computerCardSlot2.appendChild(deck.cards[3].getHTML2());
deal.disabled = true;
console.log(deck);



let x = JSON.stringify(deck.cards[0]);
console.log('This is the fourth card in the array ' + x)



  
const X = deck.cards[0].value
const Y = deck.cards[1].value
const Z = getValue(X)
const ZZ = getValue(Y)

console.log(X)
console.log(Y)
console.log(Z)
console.log(ZZ)






});

function getValue(){
  let cardvalue = deck.cards
  switch(cardvalue){
  case 'A':
    1
    break;
    case '2':
      2
      break;
      case '3':
        3
        break;
        case '4':
         4 
         break
         case '5':
           5
            break;
            case '6':
              6
              break;
              case '7':
                7
                break;
                case '8':
                  8
                  break;
                  case '9':
                  9  
                  break;
                    case '10':
                      10
                      break;
                      case 'J':
                        10
                        break
                      case 'Q':
                        10
                        break;
                        case 'K':
                          10
                        break;





   }
}












