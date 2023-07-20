import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



const Counter2 = () => {
    const counterStore = useSelector(store=>store.counter)
   let count=counterStore.count

   let dispatch = useDispatch()

    // const conterStore= useSelector(store.store)
  return (
    <>Counter2:{count}
    <br/>
     <div className='btn btn-warning' onClick={() =>{
        return dispatch({type:"INCREASE_COUNT"})
     }}>Increase</div>
     <div className='btn btn-danger' onClick={()=>{
      return dispatch({type:"DECREASE_COUNT"})
     }}>Decrease Count</div>
    </>
   
  )
}

export default Counter2