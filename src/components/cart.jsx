import '../css/cart.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import menu from '../assets/header/icons8-menu-26.svg'
import ItemCart from '../components/itemcart.jsx'
import actionTypes from '../Redux/cart/actiontype'


export default function cart() {
    
    //===pega o estado do carrinho===//
    const { activeState } = useSelector(({ cartReducer }) => cartReducer);
    //===altera o estado de ativo/desativo===//
    const dispatch = useDispatch();
    const changeActiveState = () =>{
        dispatch({
            type:actionTypes.active,
        })
    }
    const[useStateActive] = useState(activeState)
    //=====seleciona o componente do menu====//
    const idCartMenu = document.getElementById("cart-screen")
    function toggleCart() {
        idCartMenu.classList.toggle("show-cart"); 
    };
    //=======chama a função======//
    useEffect(function () {
        if(useStateActive){
            toggleCart();
        }        
    },[activeState])    
   
    return (
        <section>
            <div id="cart-screen" className='wrapper-cart-screen'>
                <div className='header-cart'>
                    <button onClick={changeActiveState} className='menu-div-mobile'>
                        <img src={menu} />
                    </button>
                    <h1>Minhas compras</h1>
                </div>
                <div className='cart-wrapper-products'>
                    <ItemCart></ItemCart>
                </div>
            </div>

        </section>
    )
}