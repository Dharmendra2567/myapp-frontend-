import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../../api/userApi'
import { saveShippingInfo } from '../../finalReducers/cartActions'
import Navbar from '../layouts/Navbar'

const Shipping = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let [shipping_info, setShipping_info] = useState({
        shipping_address: '',
        alternate_shipping_address: '',
        city: '',
        zip: '',
        country: '',
        phone: '',
        user:''
    })
   
    let { shipping_address, alternate_shipping_address, city,zip, country, phone,user } = shipping_info

    useEffect(() => {
        shipping_info = localStorage.getItem('shipping_info') ?
            JSON.parse(localStorage.getItem('shipping_info')) : {}
            setShipping_info({...shipping_info, user: isAuthenticated().user._id})
    }, [])
    const handleChange = name => e => {
        setShipping_info({ ...shipping_info, [name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(saveShippingInfo(shipping_info))
        navigate('/payment')
    }
    return (
        <>
            <Navbar />
            <div className='customMargin'>
            <form className='p-5 w-50  my-5 shadow-lg m-auto'>
                <h1 className='text-center text-decoration-underline mb-3'>Shipping Information</h1>
                <label htmlFor='shipping_address'>Shipping Address</label>
                <input type={'text'} className="form-control" id="shippinr_address" 
                    onChange={handleChange('shipping_address')} value={shipping_address}></input>
                <label htmlFor='alternate_shipping_address'>Alternate Shipping Address</label>
                <input type={'text'} className="form-control" id="alternate_shipping_address"
                    onChange={handleChange('alternate_shipping_address')} value={alternate_shipping_address}></input>
                <label htmlFor='city'>City</label>
                <input type={'text'} className="form-control" id="city"
                    onChange={handleChange('city')} value={city}></input>
                <label htmlFor='zip'>ZipCode</label>
                <input type={'text'} className="form-control" id='zip'
                    onChange={handleChange('zip')} value={zip}></input>
                <label htmlFor='country'>Country</label>
                <input type={'text'} className="form-control" id='counrty'
                    onChange={handleChange('country')} value={country}></input>
                <label htmlFor='phone' >Phone</label>
                <input type={'text'} className="form-control" id='phone'
                    onChange={handleChange('phone')} value={phone}></input>
                <hr className='my-3'></hr>
                <button className='btn btn-warning w-100' onClick={handleSubmit}>Update Shipping Address and Prodeed to Payment</button>
            </form>
            </div>
        </>
    )
}

export default Shipping