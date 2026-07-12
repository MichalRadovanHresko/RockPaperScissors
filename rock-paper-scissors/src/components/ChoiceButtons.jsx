const ChoiceButtons = ({ onChoose }) => {
  return (
    <div>
      <button onClick={() => onChoose(0)}>Rock</button>
      <button onClick={() => onChoose(1)}>Paper</button>
      <button onClick={() => onChoose(2)}>Scissors</button>
    </div>
  );
};

export default ChoiceButtons;
