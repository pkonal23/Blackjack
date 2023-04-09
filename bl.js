let person = prompt("Enter name:")
let bid = prompt("Enter bid:")
document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code goes here



    // let firstCard = 10
    // let secodCard = 11
    // let player = {
    //     name: "KONAL",
    //     chips: 199
    // }
    let playerEl = document.getElementById("player-el")

function details() {
    
    playerEl.textContent = "Name: " + person + " ,    " + "Started Bid: " + bid + "$"
    alert("'BLACKJACK' GAME RULES\n1) Start Game:- Selects two cards at random for starting the game\n2) New Card:- Selects a Card at random  3)You win if the total of cards is 21\n Try your luck!")
}
details()
});






   
    let cards = [] //array
    let sum = 0
    let hasBlackJack = false
    let isAlive = false

    function getrandomcard() {
        let randomnumber = Math.floor(Math.random() * 13) + 1
        console.log(randomnumber)
        if (randomnumber === 1) {
            return 11
        }
        else if (randomnumber >= 11) {
            return 10
        } else {
            return randomnumber
        }
    }
    function renderGame() {
        let restartEl = document.getElementById("restart-el")
        let leftbid=bid
        let sumEl = document.querySelector("#sum-el");
        let cardEl = document.querySelector("#card-el");
        let messageEl = document.getElementById("message-el");
        let message;
    
        if (sum <= 20) {
            isAlive = true;
            message = "Do you want to draw a new card?";
        } else if (sum === 21) {
            hasBlackJack = true;
            isAlive = true;
            message = "Wohoo! You've got Blackjack!";
            leftbid = bid*2; // double the bid amount
            restartEl.textContent = "You WON! (RELOAD PAGE TO RESTART)"
        } else {
            isAlive = false;
            message = "You're out of the game!";
            leftbid = 0; // reset the bid amount to 0
            restartEl.textContent = "You LOST (RELOAD PAGE TO RESTART)"
        }
    
        messageEl.textContent = message;
        sumEl.textContent = "Sum: " + sum;
        cardEl.textContent = "Cards: ";
        for (let i = 0; i < cards.length; i++) {
            cardEl.textContent += cards[i] + " ";
        }
        console.log("leftbid: "+leftbid)
      
            let newplayerEl = document.getElementById("newplayer-el")
            newplayerEl.textContent = "Name: " + person + " ,    " + "Left Bid: " + leftbid + "$"
           
        
    }


    

    function startEl() {
        
        let firstCard = getrandomcard()
        let secodCard = getrandomcard()
        cards = [firstCard, secodCard] //array
        sum = firstCard + secodCard
        renderGame()
    }

    function newcardEl() {
        if (isAlive === true && hasBlackJack === false) {


            let newEl = document.querySelector("#mess-el")
            newEl.textContent = "Drawing a new card from the deck!"
            let newCard = getrandomcard()
            cards.push(newCard)
            console.log(cards)
            sum += newCard
            renderGame()
            setTimeout(function() {
                newEl.textContent = "";
              }, 1000);
        }

    }
