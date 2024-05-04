import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RnColor from "./hooks/RnColor";
import Footer from "./components/Footer";


function App() {
  const [count, setcount] = useState(0);
  const [color, setcolor] = useState("red");
  let rn = RnColor();
  useEffect(() => {
    setcolor(`${rn}`);
  }, [count]);

  return (
    <>
      <Navbar color={color} />
      <h1>useEffect</h1>
      <button onClick={() => setcount(count + 1)}> Click</button>
      <div>count is {count}</div>
      <Footer/>
      

    </>
  );
}

export default App;
