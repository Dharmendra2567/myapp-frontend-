import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteProduct, productDetails, updateProduct } from '../../../api/productApi'
import { isAuthenticated } from '../../../api/userApi'
import { API } from '../../../config'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'

const UpdateProduct = () => {
    let [product, setProduct] = useState({
        product_name: '',
        product_price: '',
        product_description: '',
        product_image: '',
        category: '',
        count_in_stock: '',
        rating: '',
        formdata: ''
    })
    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)
    let { id } = useParams()
    let { token } = isAuthenticated()
    let navigate = useNavigate()

    const { product_name, product_price, product_description, product_image, 
        category, count_in_stock, rating, formdata } = product
    useEffect(() => {
        productDetails(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    // setProduct(data)
                    setProduct({ ...data, formdata: new FormData })
                }
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        updateProduct(id, product, token)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess(false)
                }
                else {
                    setSuccess(true)
                    setError('')
                    Swal.fire("Success","Product Updated!","success")
                }
            })
    }
    const showError = () => {
        if(error){
            return <div className="alert alert-danger">{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>Product updated successfully. <Link to='/admin/products'>Go Back.</Link></div>
        }
    }
    const handleChange = name => e => {
        let value
        if(name==='product_image'){
            value = e.target.files[0]
        }
        else{
            value = e.target.value
        }
        setProduct({...product, [name]: value})
        formdata.set(name, value)
    }
    

    return (
        <>
            <Navbar />
            {showSuccess()}
            {showError()}
            <div className='container customMargin m-5 p-5 shadow-lg'>
                <h3 className='text-center text-decoration-underline'>Product Information</h3>
                <div className='d-flex'>
                    <div className='w-50 p-5'>
                        <img src={`${API}/${product.product_image}`} alt={`${API}/${product.product_image}`}
                            style={{ width: "100%" }} />
                    </div>
                    <form className='w-50 p-5'>
                        <label htmlFor='product_name'>Product Name</label>
                        <input type={'text'} id='product_name' value={product_name} className='form-control' onChange={handleChange('product_name')}/>

                        <label htmlFor='product_price'>Product Price</label>
                        <input type={'number'} id='product_price' value={product_price} className='form-control' onChange={handleChange('product_price')}/>

                        <label htmlFor='product_description'>Product Description</label>
                        <textarea rows={5} id='product_description' value={product_description} className='form-control' onChange={handleChange('product_description')}></textarea>

                        <label htmlFor='count_in_stock'>Count in Stock</label>
                        <input type={'number'} id='count_in_stock' value={count_in_stock} className='form-control' onChange={handleChange('count_in_stock')} />

                        <label htmlFor='category'>Category</label>
                        <input type={'text'} id='category' value={category.category_name} className='form-control' onChange={handleChange('category')}/>

                        <label htmlFor='rating'>Rating</label>
                        <input type={'number'} id='rating' value={rating} className='form-control' onChange={handleChange('rating')} />

                        <label htmlFor='product_image'>Product Image</label>
                        <input type={'file'} id='product_image' className='form-control' onChange={handleChange('product_image')} />

                        <div className='btn-group'>
                            <button className='btn btn-warning' onClick={handleSubmit}>Update Product</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UpdateProduct