import React, { useState } from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import { Link } from 'react-router-dom'
import { register } from '../../api/userApi'

const Register = () => {
    let [username,setUsername] = useState('')
    let [email,setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [error, setError] =useState('')
    let [success, setSuccess] = useState(false)
    
    const handleSubmit=e=>{
        setError('')
        setSuccess(false)
        e.preventDefault()
        register({username,email,password})
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
            }
        })
    }
    const showError= ()=>{
       if(error){
        return <div className="alert alert-danger">{error}</div>
       }
    }
    const showSuccess =()=>{
        if(success){
            return <div className='alert alert-success'>Registration successful. Check your email for verification</div>
        }
    }

    return (
        <>
            <Navbar />
            <div className='customMargin'>
            {showError()}
            {showSuccess()}
            <main className="form-signin w-50 mt-3 p-5 shadow-lg m-auto rounded-5">
                <form>
                    <div className='text-center'>
                        <img className="mb-4" src="./register.jpg" alt="" width="72" height="72" />
                    </div>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    {/* <div className="form-floating">
                        <input type="text" className="form-control" id="fname" placeholder="First Name" />
                        <label htmlFor="fname">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="lname" placeholder="Last Name" />
                        <label htmlFor="lname">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="number" className="form-control" id="fname" placeholder="age" />
                        <label htmlFor="age">Age</label>
                    </div>
                    <div className='form-floating'>
                        <div className='form-control d-flex justify-content-evenly'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" id="male" />
                                <label className="form-check-label" htmlFor="male">
                                  male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" id="female" />
                                <label className="form-check-label" htmlFor="female">
                                  Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" id="others" />
                                <label className="form-check-label" htmlFor="others">
                                  Others
                                </label>
                            </div>
                        </div>
                        <label htmlFor="gender">Gender</label>
                    </div> */}
                     <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="username" onChange={e=>{
                            return setUsername( e.target.value)
                        }}/>
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    {/* <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" />I Accept the terms and conditions
                        </label>
                    </div> */}
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Register</button>
                    Already have an account?<Link to="/login" >Sign in</Link>
                </form>
            </main>

            <Footer />
            </div>
        </>
    )
}

export default Register