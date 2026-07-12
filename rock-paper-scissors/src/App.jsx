import Score from "./components/Score";
import { useState } from "react";
import Header from "./components/Header";
import ChoiceButtons from "./components/ChoiceButtons";
import ResetButton from "./components/ResetButton";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {
  let [playerScore, setPlayerScore] = useState(0);
  let [computerScore, setComputerScore] = useState(0);

  const handleChoiceSelection = (choiceIndex) => {
    const playerWon = Score(choiceIndex);
    if (playerWon === true) setPlayerScore(playerScore + 1);
    else if (playerWon === false) setComputerScore(computerScore + 1);
  };

  const resetScores = () => {
    setComputerScore(0);
    setPlayerScore(0);
  };

  return (
    <>
      <Header />
      <ChoiceButtons onChoose={handleChoiceSelection} />
      <ResetButton onReset={resetScores} />
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />
    </>
  );
};

export default App;
