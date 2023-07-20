import { ADD_ITEMS_TO_CART, CLEAR_CAR, REMOVE_ITEMS_FROM_CART, SAVE_SHIPPING_INFO } from "./cartConstants"

const initial_data = {
    cart_items: [],
    shipping_info: {},
    // role:1
}
export const cartReducers = (state = initial_data, action) => {
    switch (action.type) {

        case ADD_ITEMS_TO_CART:
            let item = action.payload
            const itemExists = state.cart_items.find(i => i.product === item.product)
            if (itemExists) {
                return {
                    ...state, cart_items: [...state.cart_items.map(cur =>
                        cur.product === item.product ? item : cur)]
                }
            }
            else {
                return { ...state, cart_items: [...state.cart_items, item] }
            }

        case REMOVE_ITEMS_FROM_CART: {
            return { ...state, cart_items: [...state.cart_items.filter(item => item.product != action.payload)] }
        }
        case SAVE_SHIPPING_INFO: {
            return { ...state,
                shipping_info: action.payload
            }
        }


        default:
            return state
    }
}
