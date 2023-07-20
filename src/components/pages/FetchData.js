import React, { useEffect, useState } from 'react'
import DisplayCard from './DisplayCard'

const FetchData = () => {
    let [posts,setPosts] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            return response.json()
        })
        .then(data =>{
            console.log(data)
            setPosts(data)
        }
           )
           .catch(error =>console.log(error))
    })
  return (

    <>
   {
     posts.map(item => {
        return <DisplayCard post={item}/>
    })
   }
    </>
  )
}

export default FetchData