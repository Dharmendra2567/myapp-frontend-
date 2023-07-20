import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteProduct, getAllProducts } from '../../../api/productApi'
import { isAuthenticated } from '../../../api/userApi'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'
import AdminSidebar from './AdminSidebar'

const AdminProduct = () => {
    const [products, setProducts] = useState([])
    const {token} = isAuthenticated()
    const [error,setError]= useState('')
    const [success,setSuccess] = useState('')
    useEffect(()=>{
        getAllProducts()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setProducts(data)
                console.log(data)
            }
        })
    },[success])

   
    const handleDelete=(id)=>e=>{
        e.preventDefault()
        setError('')
        setSuccess('')
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
                deleteProduct(id,token)
                .then(data=>{
                    if(data.error){
                        setError(data.error)
                        // setSuccess('')
                        Swal.fire(
                            'Error!',
                            error,
                            'Failed to delete category'
                          )
                    }
                    else{
                        setSuccess(data.message)
                        // setError('')
                        Swal.fire(
                            'Deleted!',
                            success,
                            'success'
                          )
                    }
                })
              
            }
          })
    }
   
  return (
    
    <>
    <Navbar/>
    {/* {showError()}
    {showSuccess()} */}
    <div className='container-fluid customMargin'>
        <div className='row'>
            <div className='col-md-3'>
            <AdminSidebar/>
            </div>
            <div className='col-md-9 p-5'>
             <h3>Products</h3>
             <table className='table table-bordered table-hover align-middle text-center'>
                <thead>
                    <tr className='table-dark'>
                        <th>S.N</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Count in Stock</th>
                        <th>Category</th>
                        <th>Action</th>
                     </tr>
                </thead>
                <tbody>
                {products.map((prod,i)=>{
                    return <tr key={i}>
                        <td>{i+1}</td>
                        <td>{prod.product_name}</td>
                        <td>Rs. {prod.product_price}</td>
                        <td>{prod.count_in_stock}</td>
                        <td>{ prod.category.category_name}</td>
                        <td>
                            <div className='btn-group m-2'>
                            <Link to={`/admin/product/update/${prod._id}`} className='btn btn-warning'><i className='bi bi-pencil' title='UPDATE'></i></Link>
                            <Link to={`/admin/product/${prod._id}`} className="btn btn-info ms-2"><i className='bi bi-search' title='VIEW DETAILS'></i></Link>
                            <button className='btn btn-danger ms-2' onClick={handleDelete(prod._id)}><i className='bi bi-trash' title='DELETE'></i></button>
                            </div>
                        </td>
                    </tr>
                })}
                <tr>
                    <td colSpan={6}>
                        <Link to="/admin/product/add" className='btn btn-primary'>Add New Product</Link>
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

export default AdminProduct