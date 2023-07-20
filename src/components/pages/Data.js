import React, { useEffect, useState } from 'react'

const Data = () => {
    let [count,setCount] = useState(0)
    let [data,setData] = useState(100)

    const increment = () => {
       setCount(++count);
        console.log(count)
    }
    const decrement = () => {
        setCount(--count)
        console.log(count)
    }
    const reset = () => {
        setCount(0)
    }
    const incrementData = () => {
        setData(data+10);
     }
     const decrementData = () => {
         setData(data-10)
     }
     const resetData = () => {
         setData(100)
     }
    useEffect(()=>{
        window.alert('count updated')
    },[data,count])
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
     <br/>
     <br/>
     <div>Data:{data}</div>
     <button onClick={incrementData}>Increase data</button>
     <button onClick={decrementData}>Decrease data</button>
     <button onClick={resetData}>Reset data</button>
   
   </div>
    
    </>
  )
}

export default Data