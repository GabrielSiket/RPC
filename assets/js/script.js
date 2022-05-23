const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  
  if (randomNumber === 1) {
    computerChoice = 'rock <br> <img src="assets/images/stone.png" width="50" height="50" alt="rock">';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors <br> <img src="assets/images/scissors.png" width="50" height="50" alt="scissors">'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper <br> <img src="assets/images/paper.png" width="50" height="50" alt="paper">'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  };
  if (computerChoice === 'rock <br> <img src="assets/images/stone.png" width="50" height="50" alt="rock">' && userChoice === "paper") {
    result = 'you win!'
  };
  if (computerChoice === 'rock <br> <img src="assets/images/stone.png" width="50" height="50" alt="rock">' && userChoice === "scissors") {
    result = 'you lost!'
  };
  if (computerChoice === 'paper <br> <img src="assets/images/paper.png" width="50" height="50" alt="paper">' && userChoice === "scissors") {
    result = 'you win!'
  };
  if (computerChoice === 'paper <br> <img src="assets/images/paper.png" width="50" height="50" alt="paper">' && userChoice === "rock") {
    result = 'you lost!'
  };
  if (computerChoice === 'scissors <br> <img src="assets/images/scissors.png" width="50" height="50" alt="scissors">' && userChoice === "rock") {
    result = 'you win!'
  };
  if (computerChoice === 'scissors <br> <img src="assets/images/scissors.png" width="50" height="50" alt="scissors">' && userChoice === "paper") {
    result = 'you lost!'
  };
  resultDisplay.innerHTML = result;
}