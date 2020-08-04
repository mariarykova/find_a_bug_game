let menuScreen = document.getElementById("menuScreen");
let mainContainer = document.getElementById("container-background");
let startButton = document.getElementById("startButton");
let gameContainer = document.createElement("div");
gameContainer.classList.add("gameScreen");

let numberOfCard;

let cardClicked = false;

const levels =  [
    document.getElementById('level-simple'),
    document.getElementById('level-middle'),
    document.getElementById('level-hard'),
]

levels.forEach(setLevel => {
    setLevel.onclick = function() {
        levels.forEach(setLevels => setLevels.classList.remove('level-selected'));
        this.classList.add('level-selected');
    };
});

function getNumberOfCard() {
        if (levels[0].classList.contains("level-selected")) {
          gameContainer.classList.add("container-for-three");
          gameContainer.classList.remove("container-for-six");
          gameContainer.classList.remove("container-for-ten");
          return numberOfCard = 3;
        }
        else if (levels[1].classList.contains("level-selected")) {
            gameContainer.classList.remove("container-for-three");
            gameContainer.classList.add("container-for-six");
            gameContainer.classList.remove("container-for-ten");
          return numberOfCard = 6;
        }
        else {
            gameContainer.classList.remove("container-for-three");
            gameContainer.classList.remove("container-for-six");
            gameContainer.classList.add("container-for-ten");
          return numberOfCard = 10;
        };
      };

function game() {
        getNumberOfCard();
        function creatureCards(number) {
        let randomCard = Math.floor(Math.random() * number);
        for (let i = 0; i < number; i++ ) {
          let card = document.createElement('div');
          let cardBackside = document.createElement('div');
          let winnerCard = document.createElement('div');
          let loserCard = document.createElement('div');
        
        if (i === randomCard) {
          cardBackside.classList.add("card__backside");
          card.classList.add("card", "card-hover");
          card.append(cardBackside);
          document.body.append(gameContainer);
          gameContainer.classList.add("gameScreen");
          gameContainer.append(card);
          winnerCard.classList.add('winner__card');
          card.append(winnerCard);
         }
         else {
          cardBackside.classList.add("card__backside");
          card.classList.add("card", "card-hover");
          card.append(cardBackside);
          document.body.append(gameContainer);
          gameContainer.classList.add("gameScreen");
          gameContainer.append(card);
          loserCard.classList.add("loser__card");
          card.append(loserCard); 
         }
        }
        }

        creatureCards(numberOfCard);

        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {
            if(cardClicked) {
                gameContainer.style.display = 'none';
                menuScreen.style.display = '';
                cardClicked = false;
            } else {
                card.classList.add("card__click");
                card.classList.remove("card-hover");
                cardClicked = true;
            }
            });
        });
    }

      function startGame() {
        gameContainer.innerHTML  = "";
        gameContainer.style.display = 'flex';
      
        menuScreen.style.display = 'none';
        game();
      }

startButton.addEventListener("click", startGame);