import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deletecategory, getAllCategories } from '../../../api/CategoryApi'
import { isAuthenticated } from '../../../api/userApi'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'
import AdminSidebar from './AdminSidebar'

const AdminCategory = () => {
    const [categories, setCategories] = useState([])
    const {token} = isAuthenticated()
    const [error,setError]= useState('')
    const [success,setSuccess] = useState('')
    useEffect(()=>{
        getAllCategories()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setCategories(data)
                console.log(data)
            }
        })
    },[success])

   
    const handleDelete=(id)=>e=>{
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deletecategory(id,token)
                .then(data=>{
                    if(data.error){
                        setError(data.error)
                        setSuccess('')
                    }
                    else{
                        setSuccess(data.message)
                        setError('')
                    }
                })
              
            }
          })
    }
    const showError=()=>{
        if(error){
            Swal.fire(
                'Error!',
                error,
                'Failed to delete category'
               
              )
        }
    }
    const showSuccess=()=>{
        if(success){
            Swal.fire(
                'Deleted!',
                success,
                'success'
              )
        }
    }
  return (
    
    <>
    <Navbar/>
    {showError()}
    {showSuccess()}
    <div className='container-fluid customMargin'>
        <div className='row'>
            <div className='col-md-3'>
            <AdminSidebar/>
            </div>
            <div className='col-md-9 p-5'>
             <h3>Categories</h3>
             <table className='table w-75 table-bordered table-hover align-middle text-center'>
                <thead>
                    <tr className='table-dark'>
                        <th>S.N</th>
                        <th>Category Name</th>
                        <th>Action</th>
                     </tr>
                </thead>
                <tbody>
                {categories.map((cat,i)=>{
                    return <tr>
                        <td>{i+1}</td>
                        <td>{cat.category_name}</td>
                        <td>
                            <div className='btn-group m-2'>
                            <Link to={`/admin/category/update/${cat._id}`} className='btn btn-warning'>Update</Link>
                            <button className='btn btn-danger ms-2' onClick={handleDelete(cat._id)}>Delete</button>
                            </div>
                        </td>
                    </tr>
                })}
                <tr>
                    <td colSpan={3}>
                        <Link to="/admin/category/add" className='btn btn-primary'>Add New Category</Link>
                    </td>
                </tr>
                </tbody>
             </table>
            </div>
        </div>
     </div>
   
   
    <Footer/>
    </>
  )
}

export default AdminCategory