import actionTypes from "./actiontype";

const initialState = {
    produtos: null,
    activeState : false
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST:
            return { ...state, produto: action.payload };
        case actionTypes.active:
            return { ...state, activeState: !state.activeState };
        default:
            return state;
    }
}
export default cartReducer;