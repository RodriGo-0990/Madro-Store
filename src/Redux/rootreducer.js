import { combineReducers } from "redux";
import productReducer from './product/reducer.js'
import allProducts from './allproducts/reducer.js'
import cartReducer from './cart/reducer.js'
const rootReducer = combineReducers({
    productReducer,
    allProducts,
    cartReducer
})

export default rootReducer;