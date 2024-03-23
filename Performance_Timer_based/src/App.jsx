import "./App.css";
import Debounce from "./hooks/UseDebounce";
import Interval from "./hooks/UseInterval";

function App() {
  return (
    <>
      <h3>useInterval - </h3>
      <Interval />
      <h3>useDebounce - </h3>
      <Debounce />
    </>
  );
}

export default App;
