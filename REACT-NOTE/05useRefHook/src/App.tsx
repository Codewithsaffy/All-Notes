// Assuming that "./index.css" exists and is in the correct path
import "./index.css";
import { useEffect, useState, useRef } from "react";
import Header from "./componenet/Header";

export default function App() {
  // State for keeping track of the count
  const [count, setCount] = useState(0);

  // Ref for a mutable object that persists for the lifetime of the component
  const a = useRef(0);

  // Ref for the button element
  const buttonRef = useRef<HTMLButtonElement | any>();

  // Effect that runs when `count` changes
  useEffect(() => {
    // Increment the ref's current value
    a.current = a.current + 1;

    // Log the current value
    console.log(`a = ${a.current}`);

    // If the button ref is attached to a DOM element, change its background color
    buttonRef.current.style.backgroundColor = "blue";
  }, [count]); // Dependency array with `count`, so this runs only when `count` changes

  return (
    <>
    <Header home="Home" about="About" contactUs="Contact"/>
      <h1 className="text-center w-1/12 p-4 m-auto text-3xl font-bold bg-pink-800 text-white rounded-full my-3">
        {count}
      </h1>
      <button
        ref={buttonRef}
        className="mx-auto block rounded bg-blue-500 px-3 py-2 text-white"
        onClick={() => setCount((prevCount) => prevCount + 1)} // Functional update to ensure we have the latest state
        type="button"
      >
        Click me
      </button>
      <button onClick={() => (buttonRef.current.style.display = "none")}>
        RED
      </button>

    </>
  );
}
