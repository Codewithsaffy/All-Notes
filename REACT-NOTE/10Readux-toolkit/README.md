# EVENT HANDLING IN REACT

In React we can handle any even in easy way like we can handle onclick , mouseover etc.

### Example


```jsx
function App() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return (
    <input type="text" onChange={handleChange} />
  )
}
```

### USE FULL CASE 

IN REACT WE CAN HANDLE MORE THAN ONE EVENT IN SINGLE FUNCTION




```jsx
function App() {
  const [value, setValue] = useState({name:"", email:""});
  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <input name="name" type="text" onChange={handleChange} />
      <input name="email" type="text" onChange={handleChange2} />
    </div>
  )
}
``` 

