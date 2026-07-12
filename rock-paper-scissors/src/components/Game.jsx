import getComputerChoice from "../hooks/getComputerChoice.jsx";

const Game = (playerChoice) => {
  const player = playerChoice;
  // Get random computer option
  const computerChoice = getComputerChoice();

  // If player used a valid option, evaluate
  if (player === 0 || player === 1 || player === 2) {
    alert(
      `Your choice: ${player === 0 ? "rock" : player === 1 ? "paper" : "scissors"} VS Computer choice: ${computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors"}`,
    );
    // tie
    if (player === computerChoice) return 2;
    // player won
    else if (player === 0 && computerChoice === 2) return 1;
    else if (player === 1 && computerChoice === 0) return 1;
    // computer won
    else if (player === 0 && computerChoice === 1) return 0;
    else if (player === 1 && computerChoice === 2) return 0;
    else if (player === 2 && computerChoice === 0) return 0;
    else return 1;
  }
};

export default Game;
