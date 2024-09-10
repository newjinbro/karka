import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const About = () => {
    const nav=useNavigate()
    const[states,setState]=useState("hi")
    const handleClick=()=>{
        nav('/display',{state:states})
    }
  return (
    <div>
        <h1>About page</h1>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
