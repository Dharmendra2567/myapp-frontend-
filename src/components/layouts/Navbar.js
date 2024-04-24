import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { isAuthenticated, signOut } from '../../api/userApi'

const Navbar = () => {
  const navigate = useNavigate()
  let {user,token}=isAuthenticated()
  //let userInfo = isAuthenticated()
  //let user = userInfo.user
  //let token = userInfo.token

  const handleSignout=()=>{
    signOut(user)
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        navigate('/login')
      }
    })
  }
  function changeBackground(e) {
    e.target.style.color = 'white';
  }
  function onMouseLeaving(e){
    e.target.style= ''
  }
  return (
    <>
    <div className='container-fluid fixed-top '>
    <div className="row custom-background">
        <div className="col-md-3 text-center fw-bold tx-dark fs-3">
        <Link className="navbar-brand" to="/"> MyKart</Link>
        </div>
        <div className="col-md-6 mt-1">
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" 
        onMouseEnter={changeBackground} onMouseLeave={onMouseLeaving} type="submit">Search</button>
      </form>
        </div>
        <div className="col-md-3 fs-3 d-flex justify-content-evenly">
         {!user &&
          <>
          <Link to="/login"><i className="bi bi-box-arrow-in-left text-dark"></i></Link>
        <Link to="/register"><i className="bi bi-person-plus text-dark"></i></Link>
          </>
        }
       
        
        {user && user.role===1 &&
        <Link to="/admin/dashboard"><i className="bi bi-speedometer text-dark"></i></Link>
        }
        {user && user.role===0 &&
        <>
         <Link to="/cart"><i className="bi bi-cart text-dark"></i></Link>
         <Link to="/userprofile"><i className="bi bi-person-circle text-dark"></i></Link>
         </>
        
         
        }
        {user &&
         <i className="bi bi-box-arrow-in-right text-primary text-dark" onClick={handleSignout} role="button"></i>
        }
        </div>
    </div>
    <div className='row'>
   <nav className="navbar navbar-expand-lg bg-light custom-background ">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/product">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/faq">FAQ</Link>
        </li>
       
         
      </ul>
     
    </div>
  </div>
</nav>
</div>
</div>
    </>
  )
}

export default Navbar