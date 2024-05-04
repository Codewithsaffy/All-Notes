## 09 Context Api

## STEPS:

1. Install Vite
2. Create a new React app
3. Install dependencies
4. Create Context
5. Create Provider

## CODE:

- 1. Create Context

```tsx
import React, { createContext } from "react";
interface AppContextInterface {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
const AppContext = createContext({} as AppContextInterface);
export default AppContext;
```

- 2. Create Provider

```tsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={{ count, setCount }}>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click
      </button>
    </AppContext.Provider>
  );
}
```
- use in different components

```tsx
function App() {
  const { count, setCount } = useContext(AppContext);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="btn btn-primary"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
    </div>
  );
}
```