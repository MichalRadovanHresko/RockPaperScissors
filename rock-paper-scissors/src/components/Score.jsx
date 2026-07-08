import Game from "./Game";

const Score = () => {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i <= 999; i++) {
    let result = Game();
    if (result === 1) {
      userScore++;
      console.log(`You won! The score is: ${userScore} : ${computerScore}`);
    } else if (result === 0) {
      computerScore++;
      console.log(
        `Computer won! The score is: ${userScore} : ${computerScore}`,
      );
    } else if (result === 2)
      console.log(`It's TIE! The score is: ${userScore} : ${computerScore}`);
    else if (result === 3) break;
  }

  return <div>Score</div>;
};

export default Score;
