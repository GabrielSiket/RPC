const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#button');
const choices = ['ROCK', 'PAPER', 'SCISSORS'];
var win = new Audio("assets/sounds/mixkit-males-yes-victory-2012.wav");
var lose = new Audio("assets/sounds/mixkit-arcade-retro-game-over-213.wav");
var draw = new Audio("assets/sounds/bass-dropmp3-14596.mp3");

const handleClick = (e) => {
  getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)]);
};
choices.forEach(choice => {
  const button = document.createElement('button');
  button.innerHTML = choice;
  button.addEventListener('click', handleClick);
  choicesDisplay.appendChild(button);
});

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'SCISSORSPAPER':
    case 'ROCKSCISSORS':
    case 'PAPERROCK':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU WIN!';
      win.play();
      break;
    case 'PAPERSCISSORS':
    case 'SCISSORSROCK':
    case 'ROCKPAPER':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU LOSE!';
      lose.play();
      break;
    case 'SCISSORSSCISSORS':
    case 'ROCKROCK':
    case 'PAPERPAPER':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , ITS A DRAW!';
      draw.play();
      break;
  }
};