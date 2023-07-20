import { productDetails } from "../api/productApi"
import { getUserDetails } from "../api/userApi"
import { ADD_ITEMS_TO_CART, REMOVE_ITEMS_FROM_CART, SAVE_SHIPPING_INFO } from "./cartConstants"

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    let data = await productDetails(id)
    dispatch({
        type: ADD_ITEMS_TO_CART,
        payload: {
            product: data._id,
            product_name: data.product_name,
            product_price: data.product_price,
            product_image: data.product_image,
            count_in_stock: data.count_in_stock,
            quantity: quantity

        }
    })
    localStorage.setItem("cart_items", JSON.stringify(getState().cart.cart_items))
}
export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_ITEMS_FROM_CART,
        payload: id
    })
    localStorage.setItem("cart_items", JSON.stringify(getState().cart.cart_items))
}
export const saveShippingInfo = (shipping_info) => (dispatch, getState) => {
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: shipping_info
    })
    localStorage.setItem('shipping_info', JSON.stringify(getState().cart.shipping_info))
}
