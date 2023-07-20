import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../../../api/CategoryApi'
import { addProduct } from '../../../api/productApi'
import { isAuthenticated } from '../../../api/userApi'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'
import AdminSidebar from './AdminSidebar'

const AddProduct = () => {
    const [categories, setCategories] = useState([])
    const myref = useRef()
    const mycatref = useRef()

    const [product, setProduct] = useState({
        product_name: '',
        product_price: '',
        product_decription: '',
        count_in_stock: '',
        category: '',
        product_image: '',
        error: '',
        success: false,
        formdata: ''
    })
    const { product_name, product_price, product_description, count_in_stock, category, error, success, formdata } = product
    useEffect(() => {
        getAllCategories()
            .then(data => setCategories(data))
        setProduct({ ...product, formdata: new FormData})
    }, [])
    const handleChange = name => e => {
        let value
        if (name == 'product_image') {
            value = e.target.files[0]
        }
        else {
            value = e.target.value
        }
        setProduct({ ...product, [name]: value })
        formdata.set(name, value)
    }
    const {token} = isAuthenticated()
    const handleSubmit = e => {
        e.preventDefault()
        addProduct(formdata, token)
            .then(data => {
                if (data.error) {
                    setProduct({ ...product, error: data.error, success: false })
                }
                else {
                    setProduct({ error: '', product_name: '', product_price: '', product_description: '', count_in_stock: '', category: '', product_image: '', success: true })
                    myref.current.value=""
                    mycatref.current.value=""
                }
            })

    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>Product added successfully<Link to="/admin/products">Go Back</Link></div>
        }
    }
    return (
        <>
            <Navbar />
            <div className='container-fluid customMargin'>
                <div className='row'>
                    <div className='col-md-3 '>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9 p-5'>
                        <h3>Add Product</h3>
                        {showError()}
                        {showSuccess()}
                        <form className='w-75 border shadow-lg p-5 rounded'>
                            <div className='form-floating'>
                                <input type={'text'} className="form-control  mb-2" id="product_name" placeholder='Product_name' onChange={handleChange('product_name')} value={product_name} />
                                <label htmlFor='product_name'>Product Name</label>
                            </div>
                            <div className='form-floating'>
                                <input type={'number'} className="form-control mb-2" id="price" placeholder='Product price' onChange={handleChange('product_price')} value={product_price} />
                                <label htmlFor='price'>Product Price</label>
                            </div>
                            <div className='form-floating'>
                                <textarea className="form-control mb-2  mb-2" rows={5} id="description" placeholder='Product description' onChange={handleChange('product_description')} value={product_description} />
                                <label htmlFor='description'>Product Description</label>
                            </div>
                            <div className='form-floating'>
                                <input type={'number'} className="form-control  mb-2" id="count_in_stock" placeholder='count in stock' onChange={handleChange('count_in_stock')} value={count_in_stock} />
                                <label htmlFor='count_in_stock'>Count In Stock</label>
                            </div>
                            <div className='form-floating'>
                                <select className="form-control  mb-2" ref={mycatref} id="category" placeholder='category' onChange={handleChange('category')}>

                                    <option >select category</option>
                                    {
                                        categories.map(cat => {
                                            return <option key={cat._id} value={cat._id}>{cat.category_name}</option>
                                        })
                                    }
                                </select>
                                <label htmlFor='category'>Category</label>
                            </div>
                            <input type={'file'} ref={myref} id="image" className='mb-2' onChange={handleChange('product_image')} />
                            <button className='btn btn-warning w-100 ' onClick={handleSubmit}>Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddProduct