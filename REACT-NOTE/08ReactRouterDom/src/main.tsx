import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './Components/Home.tsx'
import About from './Components/About.tsx'
import Contact from './Components/Contact.tsx'
import User from './Components/User.tsx'


const router = createBrowserRouter([
  {
    path:"",
    element:<Layout/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"/user/:userName",
        element:<User/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
