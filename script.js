const heading = document.getElementById(`heading`);
const choiceButtons = document.querySelectorAll(`.choice-buttons`);
const playerChoiceDisplay = document.getElementById(`player-choice`);
const computerChoiceDisplay = document.getElementById(`computer-choice`);
const resultsDisplay = document.getElementById(`results`);
const playerScoreDisplay = document.getElementById(`player-score`);
const computerScoreDisplay = document.getElementById(`computer-score`);

let playerScore = 0;
let computerScore = 0;
let playerSelection = ``;
let computerSelection = ``;

const computerPlay = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      computerSelection = `Rock`;
      break;
    case 1:
      computerSelection = `Scissors`;
      break;
    case 2:
      computerSelection = `Paper`;
      break;
  }
};

const compareChoices = () => {
  if (playerSelection === computerSelection) {
    resultsDisplay.textContent = `You TIED!`;
  } else {
    switch (playerSelection + " " + computerSelection) {
      case `Paper Rock`:
      case `Rock Scissors`:
      case `Scissors Paper`:
        playerScore++;
        resultsDisplay.textContent = `You WON!`;
        playerScoreDisplay.textContent = `Player score: ${playerScore}`;
        break;
      case `Rock Paper`:
      case `Scissors Rock`:
      case `Paper Scissors`:
        computerScore++;
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
        resultsDisplay.textContent = `You LOST!`;
        break;
    }
  }
};

const displayRoundResults = () => {
  playerChoiceDisplay.textContent = playerSelection;
  computerChoiceDisplay.textContent = computerSelection;
  const interval = setInterval(() => {
    playerChoiceDisplay.textContent = `You: ???`;
    computerChoiceDisplay.textContent = `Comp: ???`;
    resultsDisplay.textContent = ``;
    clearInterval(interval);
  }, 2000);
};

const declareWinner = () => {
  if (playerScore === 5) {
    heading.textContent = ` You WIN! You're the best, AROUND!`;
    const interval = setInterval(() => {
      gameReset();
      clearInterval(interval);
    }, 5000);
  } else if (computerScore === 5) {
    heading.textContent = `OOF. You LOST. Try again`;
    const interval = setInterval(() => {
      gameReset();
      clearInterval(interval);
    }, 5000);
  }
};

const gameReset = () => {
  computerScore = 0;
  playerScore = 0;
  heading.textContent = `ROCK! SCISSORS! PAPER!`;
  resultsDisplay.textContent = `Reset! Let's Play`;
  playerScoreDisplay.textContent = `Player score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
};

const game = () => {
  choiceButtons.forEach((choice) => {
    choice.addEventListener(`click`, (e) => {
      const playerClicked = e.target.textContent;
      playerSelection = playerClicked;
      computerPlay();
      compareChoices();
      displayRoundResults();
      declareWinner();
    });
  });
};

game();
