const gameTitleDisplay = document.getElementById(`heading`);
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
  const computerChoices = [`Rock`, `Scissors`, `Paper`];
  computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

const compareChoices = () => {
  if (playerSelection === computerSelection) {
    resultsDisplay.textContent = `You TIED!`;
  } else if (
    (playerSelection === `Rock` && computerSelection === `Scissors`) ||
    (playerSelection === `Paper` && computerSelection === `Rock`) ||
    (playerSelection === `Scissors` && computerSelection === `Paper`)
  ) {
    resultsDisplay.textContent = `You WON!`;
    playerScore++;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  } else {
    resultsDisplay.textContent = `You LOST!`;
    computerScore++;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
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
  }, 1500);
};

const declareWinner = () => {
  if (playerScore === 5 || computerScore === 5) {
    playerScore === 5 ? gameTitleDisplay.textContent = `You WIN! You're the best, AROUND!` :
      gameTitleDisplay.textContent = `OOF. You LOST. Try again`;
    const interval = setInterval(() => {
      gameReset();
      clearInterval(interval);
    }, 5000);
  };
};

const gameReset = () => {
  computerScore = 0;
  playerScore = 0;
  gameTitleDisplay.textContent = `ROCK! SCISSORS! PAPER!`;
  resultsDisplay.textContent = `Reset! Let's Play`;
  playerScoreDisplay.textContent = `Player score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
};

const game = () => {
  choiceButtons.forEach((choice) => {
    choice.addEventListener(`click`, (e) => {
      playerSelection = e.target.textContent;
      computerPlay();
      compareChoices();
      displayRoundResults();
      declareWinner();
    });
  });
};

game();
