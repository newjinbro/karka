import React from 'react'
import { useLocation } from 'react-router-dom'
export const Display = () => {
    const location=useLocation()
    console.log(location)
  return (
    <div>
        <h1>Display</h1>
        <p>Pathame:{location.pathname}</p>
        <p>search:{location.search}</p>
        <p>hash:{location.hash}</p>
        <p>state:{JSON.stringify(location.state)}</p>
    </div>
  )
}
