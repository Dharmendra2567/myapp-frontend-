import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signOut } from '../../../api/userApi'

const UserSidebar = () => {
    const {user} = isAuthenticated()
    const navigate = useNavigate()
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
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '280px'}}>
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:to="#bootstrap"/></svg> */}
      <i className='bi bi-speedometer2 me-2'></i>
      <span className="fs-4">User Dashboard</span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      
    <li>
        <Link to="/userprofile" className="nav-link link-dark">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#grid"/></svg> */}
          <i className='bi bi-grid'></i>
          My Profile
        </Link>
      </li>
      <li>
        <Link to="/orders" className="nav-link link-dark">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#people-circle"/></svg> */}
          <i className='bi bi-grid'></i>
          My Orders
        </Link>
      </li>
    
    </ul>
    <hr/>
    <div className="dropdown">
      <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <i alt="" width="32" height="32" className="rounded-circle me-2 bi bi-person-circle"/>
        <strong>{user.username}</strong>
      </Link>
      <ul className="dropdown-menu text-small shadow">
        <li><span className="dropdown-item">{user.username}</span></li>
        <li><span className="dropdown-item">{user.email}</span></li>
        <li><hr className="dropdown-divider"/></li>
        <li><span className="dropdown-item" role={'button'} onClick={handleSignout}>Sign out</span></li>
      </ul>
    </div>
  </div>

    </>
  )
}

export default UserSidebar