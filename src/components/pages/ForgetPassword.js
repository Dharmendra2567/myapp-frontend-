import React, { useState } from 'react'
import { forgetPassword } from '../../api/userApi'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        forgetPassword(email)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess('')
                }
                else {
                    setSuccess(data.message)
                    setError('')
                }
            })
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>{success}</div>
        }
    }
    return (
        <>
            <Navbar />
            <div className='customMargin'>
            {showSuccess()}
            {showError()}
            
            <form className='w-50 m-auto p-5 mt-5'>
                <label htmlFor='email'>Email</label>
                <input type="email" className='form-control' onChange={e => setEmail(e.target.value)} />
                <button className='btn btn-warning mt-3' onClick={handleSubmit}>forget Password </button>
            </form>
            <Footer />
            </div>
        </>
    )
}

export default ForgetPassword