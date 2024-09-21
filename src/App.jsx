import React, { useEffect, useState } from 'react'
import Throttling from './hooks/Throttling'
const App = () => {

  const[top,setTop] = useState(0)
  const throttleValue = Throttling(top,1000)
  useEffect(()=>{
 
   
  const handle_scroll =()=>{
 setTop(window.scrollY)
  }

    document.addEventListener('scroll',handle_scroll)
    return ()=>{
      document.removeEventListener('scroll',handle_scroll)
    }
  },[])
  return (
    <div style={{height:'1000rem'}}>
      <div style={
        {
          position:'fixed',
          top:'0rem'
        }
      }>
      <h1>Throttling in Action</h1>
      <hr/>
      <h2>Normal:{top}</h2>
      <hr/>
      <h2>Throttled:{throttleValue}</h2>
      </div>
    </div>
  )
}

export default App
