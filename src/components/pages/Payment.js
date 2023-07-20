import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { placeOrders, processPayment } from '../../api/paymentApi'
import { isAuthenticated } from '../../api/userApi'
import { API } from '../../config'
import Navbar from '../layouts/Navbar'

const Payment = () => {
  let cart_items = useSelector(state=>state.cart.cart_items)
  let shipping_info = useSelector(state=>state.cart.shipping_info)
  let total_price = sessionStorage.getItem("total_price")
  let username = isAuthenticated().user.username
  let email = isAuthenticated().user.email
  let stripe = useStripe()
  let elements = useElements()

  let order_info={
    orderItems:cart_items,
    user:isAuthenticated().user._id,
    shipping_Address: shipping_info.shipping_address,
    alternate_shipping_address: shipping_info.alternate_shipping_address,
    city: shipping_info.city,
    country: shipping_info.country,
    zip: shipping_info.zip,
    phone:shipping_info.phone
  }
  let makePayment =async (e)=>{
    e.preventDefault()
    document.querySelector('#paybtn').disabled=true
    let client_secret
    try{
     client_secret= await processPayment(total_price).then((data)=>{
        return data.client_secret
      })
      
    
    if(!stripe || !elements){
      return
    }
    let result = await stripe.confirmCardPayment(`${client_secret}`,{
      payment_method:{
        card:
        elements.getElement(CardNumberElement),
        billing_details:{
          email:email,
          name:username
        }
      }
    })
    if(result.error){
      Swal.fire("error","Payment Failed","error")
      document.querySelector('#paybtn').disabled= false
    }
    else {
      if(result.paymentIntent.status==="succeeded"){
        order_info.payment_info = {
          id:result.paymentIntent.id,
        status:result.paymentIntent.status
        }
      }
      placeOrders(order_info)
      .then(data=>{
        if(data.error){
          console.log(data.error)
        }
        else{
          localStorage.removeItem("cart_items")
          Swal.fire("congrats!","your order has been placed",'success')

        }
      })
      document.querySelector('#paybtn').disabled= false
    }
  }
  catch(error){
    Swal.fire("error",error.message,'error')
    document.querySelector('#paybtn').disabled= false

  }

  }
  return (
    <>
    <Navbar/>
    <div className='container-fluid customMargin'>
      <div className='row'>
        <div className='col col-sm-3 col-md-5 col-lg-7 p-5'>
              <h3>Order Details</h3>
              {/* <div className='col-sm-4 col-md-7'> */}
              <table className='table text-center shadow-lg'>
                <thead>
                  <tr className='table-dark'>
                    <th>S.No</th>
                    <th>Product Image</th>
                    <th>Product Info</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
              {
                cart_items.length>0 && cart_items.map((item,i)=>{
                    return <tr key={i}>
                      <td>{i+1}</td>
                      <td><img src={`${API}/${item.product_image}`} style={{height:"120px"}}/></td>
                      <td>{item.product_name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.quantity *item.product_price}</td>
                    </tr>
                })
              }
              <tr className='table-dark'>
                <td colSpan={4} className='text-end pe-5'> Cart Total:</td>
                <td className='fs-4'>Rs.{total_price}</td>
              </tr>
               </tbody>
              </table>
              {/* </div> */}
              <h3 className='text-decoration-underline'>Shipping Details</h3>
              <h4>Name: {username}</h4>
              <h4>Shipping Address: {shipping_info.shipping_address}</h4>
              <h4>Alternate Shipping Address: {shipping_info.alternate_shipping_address}</h4>
              <h4>City: {shipping_info.city}</h4>
              <h4>Zip: {shipping_info.zip}</h4>
              <h4>Country: {shipping_info.country}</h4>
              <h4>Phone: {shipping_info.phone}</h4>
        </div>
        <div className='col col-md-5 p-5'>
          <div className='shadow-lg p-4'>
            <h3 className='text-decoration-underline' >Payment Details</h3>
            <label htmlFor='card-number'>Card Number</label>
            <CardNumberElement className='form-control' id='card-number'/>
            <label htmlFor='card-expiry'>Valid Upto</label>
           <CardExpiryElement className='form-control' id='card-expiry'/>
            <label htmlFor='cvc'>CVC</label>
            <CardCvcElement className='form-control' id='cvc'/>
            <hr className='my-2'/>
            <button className='btn btn-warning w-100' id="paybtn" onClick={makePayment}>Confirm Payment</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Payment