import Game from "./Game";

const Score = (playerChoice) => {
  let outcome = Game(playerChoice);
  if (outcome === 1) {
    alert(`You won!`);
    return true;
  } else if (outcome === 0) {
    alert(`Computer won!`);
    return false;
  } else if (outcome === 2) {
    alert(`It's TIE!`);
  }
};

export default Score;
