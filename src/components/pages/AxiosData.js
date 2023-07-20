import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DisplayCard from './DisplayCard'

const AxiosData = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>response.data)
        .then(data=>setPosts(data))
        .then(error=>console.log(error))
    })
  return (
    <>
    {
        posts.map(item=>{
            return <DisplayCard post={item}/>
        })
    }

    </>
  )
}

export default AxiosData