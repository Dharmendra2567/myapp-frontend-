import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { authenticte, isAuthenticated, login } from '../../api/userApi'

const Login = () => {
  const navigate = useNavigate()
  const user_info = isAuthenticated()
  const [user,setUser] =useState({
    email:'',
    password:'',
    error:'',
    success:false
  })
  const {email,password,error,success} = user
  const handleClick= e =>{
    e.preventDefault()
    login(user)
    .then(data=>{
      if(data.error){
        setUser({...user,error:data.error})
      }
      else{
        setUser({success: true})
        authenticte(data)
      }
    })
  }
  const showError=()=>{
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  const redirect=()=>{
    if(success){
      console.log(user_info)
      if(user_info && user_info.user.role===1){
        navigate('/admin/dashboard')
      }
      else{
        navigate('/')
      }
     
    }
  }
  return (
    <>
    <Navbar/>
    <div className='customMargin'>
    {showError()}
    {redirect()}
    <main className="form-signin w-50 mt-3 p-5 shadow-lg m-auto rounded-5">
  <form>
    <div className='text-center'>
    <img className="mb-4" src="./login.png" alt="" width="72" height="72"/>
    </div>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={e=>setUser({...user,email:e.target.value})}/>
      <label htmlFor="email">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="password" placeholder="Password" onChange={e=>setUser({...user,password:e.target.value})}/>
      <label htmlFor="password">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleClick}>Sign in</button>
    <div className='d-flex justify-content-between'>
      <div>
      Do not have an account?<Link to="/register" >Register</Link>
      </div>
      <div>
        <Link to="/forgetpassword">forget Password</Link>
      </div>
    </div>
  </form>
</main>

    <Footer/>
    </div>
    </>
  )
}

export default Login