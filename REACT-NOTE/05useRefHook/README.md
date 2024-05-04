<!-- codeium convert it into colorful markdown -->

<!-- d:/NOTES/REACT-NOTE/05useRefHook/README.md -->

# 05 useRef Hook

## Introduction

In React, useRef Hook is used to persist a value between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

## Usage

```js
import { useRef } from 'react';

const App = () => {
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};
```

## Advantages of Use Ref Hook

- It can be used to persist a value between renders
- It can be used to access a DOM element directly
- It can be used to store a mutable value that does not cause a re-render when updated
