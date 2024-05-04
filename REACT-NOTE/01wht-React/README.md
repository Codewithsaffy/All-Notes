# Why React

#### React is a javascript library which is use to build single page application and in react we change the state of the of any variable in easy way and it is very fast.

### Example

```js
let name = " React  ";
function App() {
  return <h1>My name is {name}</h1>;
}
// output => <h1>My name is  React  </h1>
```

#### In React we can create different components and use in different places and multiple components can be created and used.
<b>OR</b>

#### In React we can split our app in different components.

### Example

```js
import React from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
export default App;
```
