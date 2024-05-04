import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)
  function clickfb() {
    setCount(count + 1)
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={clickfb}>click</button>
    </>
  );
}

export default App;
