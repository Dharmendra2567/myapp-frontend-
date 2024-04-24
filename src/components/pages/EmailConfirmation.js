import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { confirmEmail } from '../../api/userApi'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const EmailConfirmation = () => {
    const params = useParams()
    const token = params.token
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    // const {token} = useParams()
    useEffect(()=>{
        setError('')
        setSuccess('')
        confirmEmail(token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(data.message)
            }
        })
        .catch(err=>console.log(err))
    },[])

    const showError = () =>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess=()=>{
        if(success){
            return <div className='alert alert-success'>{success} <Link to="/login">Login</Link>.</div>
        }
    }
  return (
   <>
    <Navbar/>
    <div className='customMargin'>
    {showError()}
    {showSuccess()}
    <Footer/>
    </div>
   </>
  )
}

export default EmailConfirmation