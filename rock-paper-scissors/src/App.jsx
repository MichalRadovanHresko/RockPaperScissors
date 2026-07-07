import getComputerChoice from "./components/getComputerChoice";

const App = () => {
  // user input his choice
  let person = prompt("Please enter your choice: ");
  // IF user wrote in big letters it will get converted
  person = person.toLowerCase();
  // IF user accidentally click space after/before word we remove it
  person = person.split(" ").join("");
  // Get random computer option
  let computer = getComputerChoice();

  // IF user use valid option show us info
  if (person === "rock" || person === "paper" || person === "scissors") {
    console.log(`Your choice: ${person} VS Computer choice: ${computer}`);
  } // ELSE show message that we should enter valid value
  else {
    console.log("Invalid value! Choose from rock, paper, scissors!");
  }

  return (
    <>
      <h1>Rock Paper Scissors</h1>
      <p>Open console F12</p>
    </>
  );
};

export default App;
