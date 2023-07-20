import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getUserDetails, isAuthenticated } from '../api/userApi'
import { API } from '../config'
import { addItemToCart, removeFromCart } from '../finalReducers/cartActions'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'

const Cart = () => {
    // const [user, setUser] = useState([])
    // const {token}= isAuthenticated()
    const params = useParams()
    const id= params.id
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart_items = cart.cart_items

    const cart_items_number = cart_items.map(item => item.quantity)
    const item_numbers =cart_items_number.length>0? cart_items_number.reduce((a, c) => a + c):0
    //    console.log(item_numbers)
    const cart_individual_total = cart_items.map(item => item.quantity * item.product_price)
    const total_price = cart_items.length>0? cart_individual_total.reduce((a, c) => a + c):0

    console.log(cart_items)

    const increase = (id, quantity, stock) => e => {
        e.preventDefault()
        quantity++
        if (quantity > stock) {
            Swal.fire("warning", "item out of stock", "warning")
        }
        else {
            dispatch(addItemToCart(id, quantity))
            Swal.fire("item incresed")
        }
    }
    const decrease = (id, quantity) => e => {
        e.preventDefault()
        quantity--
        if (quantity <= 0) {
            Swal.fire("warning", "You cannot decrease further, try removing", "warning")
        }
        else {
            dispatch(addItemToCart(id, quantity))
            Swal.fire("item decreased")
        }
    }
    const remove = (id) => e => {
        e.preventDefault()
        dispatch((removeFromCart(id)))
        Swal.fire("warning", "Item removed from cart", "warning")


    }
    const checkout=e =>{
        e.preventDefault()
        sessionStorage.setItem("total_price",total_price)
        navigate('/shipping')
    }
    // useEffect(()=>{
    //     getUserDetails(id)
    //     .then(data=>{
    //         if(data.error){
    //             console.log(data.error)
    //         }
    //         else{
    //             setUser(data)
    //             console.log("hello world")
    //             console.log(data)
    //         }
    //     })
    //     .catch(err=>console.log(err))
    // },[])
    return (
        <>
            <Navbar />
            {
                cart_items.length>0?
            <div className='container-fluid customMargin '>
            <div className='row'>
                <div className='col col-md-8'>


                    <div className='container p-5'>
                        <h4 className='text-center'>Cart Item</h4>
                        <table className='table text-center table-bordered table-hover align-middle'>
                            <thead>
                                <tr>
                                    <th>S.N</th>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart_items.map((item, i) => {
                                        return <tr key={item._id}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <img src={`${API}/${item.product_image}`} style={{ height: '100px' }} />
                                            </td>
                                            <td>
                                                <h5>{item.product_name}</h5>
                                            </td>
                                            <td>
                                                <div className='btn-group'>
                                                    <button className='btn btn-warning' onClick={decrease(item.product, item.quantity)}>-</button>
                                                    <input type={'text'} value={item.quantity} size={2} style={{ textAlign: "center" }} readOnly />
                                                    <button className='btn btn-success' onClick={increase(item.product, item.quantity, item.count_in_stock)}>+</button>
                                                </div>
                                            </td>
                                            <td>
                                                <h6>{item.product_price * item.quantity}</h6>
                                            </td>
                                            <td>
                                                <div className='btn-group'>
                                                    <button onClick={remove(item.product)} className='btn btn-danger'><i className="bi bi-trash" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col col-md-3'>
                    <div className='border border-3 rounded p-5 mt-5'>
                        <h3 className='text-center text-decoration-underline'>Cart Summary</h3>
                        <h4>No. of Items: {item_numbers}</h4>
                        <h4>Cart Total:Rs. {total_price}</h4>
                        <hr className='py-3'></hr>
                        <button className='btn btn-warning w-100' onClick={checkout}>Checkout</button>
                    </div>
                </div>
                </div>
            </div>:
            <div className='alert alert-danger'>No Items added in cart yet</div>
                            }

            <Footer />
        </>
    )
}

export default Cart