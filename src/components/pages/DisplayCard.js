import React from 'react'

const DisplayCard = ({post}) => {
  return (
    <>
    <div className='card p-3 rounded rounded-3 shadow-lg'>
        <h1>{post.id}:{post.title}</h1>
        <hr/>
        <p>{post.body}</p>
    </div>
   
    </>
  )
}

export default DisplayCard