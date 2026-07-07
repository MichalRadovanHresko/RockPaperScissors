import getComputerChoice from "./components/getComputerChoice";

const App = () => {
  return (
    <>
      <button onClick={() => console.log(getComputerChoice())}>Play</button>
      {/* <p>{result}</p> */}
    </>
  );
};

export default App;
