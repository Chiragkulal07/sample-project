import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <h1>Simple React Project</h1>

      <h2>Counter: {count}</h2>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <br />

      <button onClick={() => setDark(!dark)}>
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;