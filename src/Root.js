import React from 'react'
import { Outlet } from 'react-router-dom'
import './Root.css'

function Root() {
  return (
      <div className='App'>
        <Outlet/>
      </div>
  )
}

export default Root