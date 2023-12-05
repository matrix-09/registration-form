import React from 'react'
import FormValidationExample from './Registration/RegForm'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Success from './success/success'
import Root from './Root'
import './App.css'


function App() {
  const routerObj=createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      children:[
        {
          path:'/',
          element:<FormValidationExample/>
        },
        {
          path:'/success',
          element:<Success/>
        }
      ]
    }
  ])
  return (
    <body>
      <RouterProvider router={routerObj}/>
    </body>
    
  )
}

export default App