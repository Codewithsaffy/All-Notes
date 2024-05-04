import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  interface todoType {
    title: string;
    desc: string;
  }
  const [count, setCount] = useState(0);
  const [btn, setbtn] = useState(true);
  const [todo, settodo] = useState<[...todoType[]]>([
    { title: "first", desc: "hello" },
    { title: "second", desc: "hello" },
    { title: "third", desc: "hello" },
  ]);
  const Todo = (todo: todoType) => {
    return (
      <>
        <div>{todo.title}</div>
        <div>{todo.desc}</div>
      </>
    );
  };
  const [list, setList] = useState<string[]>(["Home", "About", "Contact"]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>
        {list.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </h2>
      {todo.map((todo) => {
        return <Todo key={todo.title} title={todo.title} desc={todo.desc} />;
      })}
      <div className="card">
        {}
        {btn && (
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        )}
        <button onClick={() => setbtn(!btn)}>show</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
