import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h1>home page</h1>
        <Link to='/about'>Go to About</Link><br/>
        <Link to='/dis'>Go to dis</Link>
        <br/>
        <Link to="/some6element={<Display/>}?query=abc#section">go to random path with search and hash</Link>
    </div>
  )
}
