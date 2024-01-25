import actionTypes from "./product-actiontypes";

const initialState = {
    produto: null,
};

const productReducer = (state=initialState, action)=>{
    if (action.type === actionTypes.REQUEST) {
        return{...state, produto: action.payload };
    }
    return state;
}
export default productReducer;