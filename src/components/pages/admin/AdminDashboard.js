import React from 'react'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
  return (
    <>
    <Navbar/>
    <div className='container-fluid customMargin'>
        <div className='row'>
            <div className='col-md-3'>
            <AdminSidebar/>
            </div>
            <div className='col-md-9 p-5'>
             <h3>AdminDashboard</h3>
            </div>
        </div>
     </div>
   
   
    <Footer/>
    </>
  )
}

export default AdminDashboard