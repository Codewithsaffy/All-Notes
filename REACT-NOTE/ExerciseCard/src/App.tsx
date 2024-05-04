import { useEffect, useState } from "react";
import Card, { Props } from "./Components/Card";

function App() {
  const [data, setdata] = useState<Props[]>([
    {
      body: "",
      id: 0,
      title: "",
      userId: 0,
    },
  ]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
      res.json().then((data: Props[]) => {
        return setdata(data);
      });
    });
  }, [data]);
  return (
    <>
    <div className="flex flex-wrap gap-2 justify-evenly">
      {data.map((data, index) => {
        return (
          <Card
            body={data.body}
            title={data.title}
            userId={data.id}
            key={index}
            id={data.id}
          />
        );
      })}
      </div>
    </>
  );
}

export default App;
