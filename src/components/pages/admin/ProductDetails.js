import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteProduct, productDetails } from '../../../api/productApi'
import { isAuthenticated } from '../../../api/userApi'
import { API } from '../../../config'
import { addItemToCart } from '../../../finalReducers/cartActions'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'

export const ProductDetails = () => {
    const { token, user } = isAuthenticated()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    let [product, setProduct] = useState({})
    const navigate = useNavigate()
    let { id } = useParams()
    let dispatch = useDispatch()


    useEffect(() => {
        productDetails(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProduct(data)
                }
            })
    }, [])

    const handleDelete = (id) => e => {
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
                deleteProduct(id, token)
                    .then(data => {
                        if (data.error) {
                            setError(data.error)
                            // setSuccess('')
                            Swal.fire(
                                'Error!',
                                error,
                                'Failed to delete category'
                            )
                        }
                        else {
                            setSuccess(data.message)
                            // setError('')
                            Swal.fire(
                                'Deleted!',
                                success,
                                'success'
                            )
                            navigate('/admin/products')
                        }
                    })

            }
        })
    }
    const addItem = e => {
        e.preventDefault()
        dispatch(addItemToCart(id, 1))
    }
    return (
        <>
            <Navbar />
            <div className='container-fluid customMargin m05 p05 shadow-lg'>
                <h3 className='text-center text-decoration-underline'>Product Information</h3>
                <div className='d-flex'>
                    <div className='w-50 p-5'>
                        <img src={`${API}/${product.product_image}`} alt={`${API}/${product.product_image}`} style={{ width: "100%" }} />

                    </div>
                    <div className='w-50 p-5'>
                        <h4><b><u>{product.product_name}</u></b></h4>
                        <h5>Price:{product.product_price}</h5>
                        <h5>Description: {product.product_description}</h5>
                        <h5>Stock: {product.count_in_stock}</h5>
                        <h5>Rating: {product.rating}</h5>
                        {
                            user && user.role === 1 &&
                            <div className='btn--group'>
                                <Link to={`/admin/product/update/${product._id}`} className='btn btn-warning'>Update</Link>
                                <button className="btn btn-danger" onClick={handleDelete(product._id)}>Delete</button>
                            </div>
                        }
                        {user && user.role === 0 &&
                            <button className='btn btn-warning' onClick={addItem}>Add To Cart</button>
                        }



                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
