import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import Card from './Card'

const Display = () => {
    let info = useContext(GlobalContext)
  return (
   
    <>
     {info}
    <div className='row row-cols-4'>
    <Card name="Iphone Charger" price="1,000" description="Most durable and fast charger for iphone at affordable price"  image="1.jpg"/>
    <Card name="Keyboard" price="500" description="Featured with both Nepali and English typing" image="2.jpg"/>
    <Card name="Mouse" price="700" description="Wired mouse with highly LED sensor" image="3.jpg"/>
    <Card name="Headphone" price="1,500" description="Most confortable wired headphone" image="4.jpg"/>
    <Card name="Laptop" price="1,49,999" description="DELL inspiron series 3035" image="5.jpg"/>
    </div>
    </>
  )
}

export default Display