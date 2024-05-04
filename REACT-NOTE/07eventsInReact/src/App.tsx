import React, { useState } from "react";

interface Input {
  text: string;
  number: string;
}
function App() {
  const [value, setValue] = useState<Input>({ text: "", number: "" });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
    console.log(value);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        value={value.text}
        name="text"
        type="text"
        placeholder="Type here"
        className="m-2 bg-slate-300"
      />
      <input
        onChange={handleChange}
        value={value.number}
        name="number"
        type="number"
        placeholder="Type here"
        className="m-2 bg-slate-300"
      />
    </div>
  );
}

export default App;
