# ROUTER IN REACT

## installation
npm i react-router-dom
```jsx
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {RouterProvider} from 'react-router-dom'
```

we use outlet in our application to render our components in specific route.

like

```jsx
<Header/>
<Outlet/>
<Footer/>
```
we use createBrowserRouter to create path and element.

like

```jsx
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>
    children:[
      {
        path: "",
        element:<Home/>
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  }
]);
```

we use RouterProvider to render our router.


```jsx
<RouterProvider router={router}/>
```

