import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../../api/userApi'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'
import UserSidebar from './UserSidebar'

const UserProfile = () => {
  const { user } = isAuthenticated()
  return (
    <>
      <Navbar />
      <div className='container-fluid customMargin'>
        <div className='row'>
          <div className='col-md-3'>
            <UserSidebar />
          </div>
          <div className='col-md-9 p-5'>

            <div className='card bg-dark shadow-lg w-70 rounded rounded-5 p-4'>
              <div className='card-body bg-info'>
                <div className='row'>
                  <div className='col col-md-5 border-end border-dark border-4'>
                    <h3>welcome, </h3>
                <img className='profile-image' src='./user.png' alt='' />
                <h5>username: {user.username}</h5>
                <h5>Email: {user.email}</h5>
                <h5>Gender: </h5>
                <h5>Date Of Birth: </h5>
                </div>
                <div className='col col-md-7'>
                  <h3>Top 5 purchased items:</h3>
                  <hr className='my-2'></hr>
                  <h5>Your purchsed item</h5>
                  <h5>Your purchsed item</h5>
                  <h5>Your purchsed item</h5>
                  <h5>Your purchsed item</h5>
                  <h5>Your purchsed item</h5>
                  <h6><Link to="#">View All</Link></h6>
                  <hr className='my-2'></hr>
                  <div className='btn-group d-flex justify-content-evenly'>
                  <Link to={'/update/user/:id'}><button className='border-dark btn btn-danger'> <i className='bi bi-trash'>Clear History</i></button></Link>
                  <Link to={'/update/user/:id'}><button className='border-dark btn btn-success'> <i className='bi bi-pencil'>Edit Details</i></button></Link>
                <Link to={'/update/user/:id'}><button className='border-dark btn btn-warning'> <i className='bi bi-arrow-right'>Sign Out</i></button></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default UserProfile