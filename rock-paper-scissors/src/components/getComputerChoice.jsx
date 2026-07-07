const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  return number === 0 ? "rock" : number === 1 ? "paper" : "scissors";
};

export default getComputerChoice;
