import "../css/itemfrete.css"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actionTypes from '../Redux/cart/actiontype'
import image from "../assets/section/truck.svg"

export default function itemFrete({ prazo, valor, nome }) {
    const { valorFrete } = useSelector(({ cartReducer }) => cartReducer);
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false);
    const setFrete = () => {
        setChecked(true)
        if (valorFrete !== valor) {
            dispatch({
                type: actionTypes.VALORFRETE,
                payload: valor
            });
        }
    }
    useEffect(() => {
        if (checked) {
            dispatch({
                type: actionTypes.VALORFRETE,
                payload: valor
            })
        }
    }, [valor])

    return (
        <div className="itemfrete-wrapper">
            <div className="option-button-frete-wrapper">
                <input id="btn" type="radio" name="option" onClick={setFrete} />
            </div>
            <div className="option-info-frete-wrapper">
                <div className="option-label-frete">
                    <label>Correios {nome}</label>
                    <label style={{ color: "#daabbe", fontSize: "12px" }}> <span><img src={image} /></span> chega em até {prazo} dias uteis</label>
                </div>
            </div>
            <div className="value-frete">
                <h5>R${valor}</h5>
            </div>
        </div>
    )
}