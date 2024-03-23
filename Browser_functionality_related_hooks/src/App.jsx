import "./App.css";
import { useIsOnline } from "./hooks/useIsOnline";
import { useMousePointer } from "./hooks/useMousePointer";

function App() {
  const isOnline = useIsOnline();
  const position = useMousePointer();

  return (
    <div>
      <h3>useIsOnline hook -</h3>
      <p>
        {isOnline
          ? "You are online, woohoo"
          : "You are offline, connect to internet!"}
      </p>
      <h3>useMousePointer hook -</h3>
      <p>
        <span>X: {position.x}</span> &nbsp;
        <span>Y: {position.y}</span>
      </p>
    </div>
  );
}

export default App;
