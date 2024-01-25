import actionTypes from "./actiontype";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    produtos: [],
    activeState: false,
    msgActive: false,
    frete: [],
    valorFrete:0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST:
            const novoProduto = { ...action.payload, id: uuidv4(), valorsomado: 0 };
            return { ...state, msgActive: state.msgActive = true, produtos: [...state.produtos, novoProduto] };
        case actionTypes.UPDATE:
            return {
                ...state,
                produtos: state.produtos.map(item =>
                    item.id === action.payload.id
                        ? { ...item, valorsomado: item.valor * action.payload.unidades_ } // Atualiza valorsomado com base nas novas unidades
                        : item
                )
            };
        case actionTypes.active:
            return { ...state, activeState: !state.activeState};
        case actionTypes.activeMSG:
            return { ...state, msgActive: state.msgActive = false };
        case actionTypes.DELETE:
            return {
                ...state,
                produtos: state.produtos.filter(item => item.id !== action.payload.id)
            };
        case actionTypes.FRETE:
            return{
                ...state,
                frete: action.payload
            };  
        case actionTypes.VALORFRETE:
            return{
                ...state,
                valorFrete: action.payload
            }      
        default:
            return state;
    }
}
export default cartReducer;