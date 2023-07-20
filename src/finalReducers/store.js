import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import  {cartReducers} from "./cartReducers";

const rootReducer = combineReducers({
    cart: cartReducers,
    
})
const middleware = [thunk]

const initialState = {
    cart: {
        cart_items: localStorage.getItem('cart_items') ?
         JSON.parse(localStorage.getItem('cart_items')):[],
         shipping_info: localStorage.getItem('shipping_info')?
         JSON.parse(localStorage.getItem('shipping_info')):{},
         
    }
}
export const Store = createStore(rootReducer,initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))