const ScoreBoard = ({ playerScore, computerScore }) => {
  return (
    <div>
      <p>Your score: {playerScore}</p>
      <p>Computer score: {computerScore}</p>
    </div>
  );
};

export default ScoreBoard;
