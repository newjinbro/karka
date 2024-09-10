import React from 'react'
import { useLocation } from 'react-router-dom'
export const Notfound = () => {
    const location=useLocation()
  return (
    <div>
        <p>Pathame:{location.pathname}</p>
        <p>search:{location.search}</p>
        <p>hash:{location.hash}</p>
        <p>state:{JSON.stringify(location.state)}</p>
    </div>
  )
}

