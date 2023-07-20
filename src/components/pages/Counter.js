import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)
    const increment = () => {
       setCount(++count);
    }
    const decrement = () => {
        setCount(--count)
    }
    const reset = () => {
        setCount(0)
    }
  return (
    <>
   <div className='text-center'>
    <div style={{fontSize:'50px'}}>Counter:{count}</div>
    {
        count < 10 &&
        <button onClick={increment}>Increase count</button>
    }
    {
        count > 0 &&
        <button onClick={decrement} >Decrease count</button>
    }
     <button onClick={reset} >Reset count</button>
   
   </div>
    
    </>
  )
}

export default Counter