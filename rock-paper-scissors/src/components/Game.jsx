import getComputerChoice from "../hooks/getComputerChoice";

const Game = () => {
  // user input his choice
  let person = prompt(
    `Please enter your choice: (If you wanna stop the game type: 'stop')`,
  );
  // IF user wrote in big letters it will get converted
  person = person.toLowerCase();
  // IF user accidentally click space after/before word we remove it
  person = person.split(" ").join("");
  if (person === "rock") person = 0;
  else if (person === "paper") person = 1;
  else if (person === "scissors") person = 2;
  else if (person === "stop") return 3;
  else {
    console.log("Invalid value! Choose from rock, paper, scissors!");
    return;
  }

  // Get random computer option
  let computer = getComputerChoice();

  // IF user use valid option show us info
  if (person === 0 || person === 1 || person === 2) {
    console.log(
      `Your choice: ${person === 0 ? "rock" : person === 1 ? "paper" : "scissors"} VS Computer choice: ${computer === 0 ? "rock" : computer === 1 ? "paper" : "scissors"}`,
    );
    // return the value if its tie
    if (person === computer) return 2;
    // return the value if user won
    else if (person === 0 && computer === 2) return 1;
    else if (person === 1 && computer === 0) return 1;
    // return the value if computer won
    else if (person === 0 && computer === 1) return 0;
    else if (person === 1 && computer === 2) return 0;
    else if (person === 2 && computer === 0) return 0;
    else return 1;
  }
};

export default Game;
