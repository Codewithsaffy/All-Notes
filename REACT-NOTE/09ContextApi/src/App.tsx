import { useState } from "react";
import userContext from "./Context/ContextUser";
import Card from "./Components/Card";
function App() {
  const [countUser, setUserCount] = useState<number>(0)
  return (
    <userContext.Provider value={{countUser, setUserCount}}>
      <button className="btn btn-primary" onClick={() => setUserCount(countUser+1)}>Click</button>
      <Card/>
    </userContext.Provider>

  );

}

export default App;
