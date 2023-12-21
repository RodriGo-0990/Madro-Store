import '../css/cart.css'
import { useSelector,useDispatch } from 'react-redux'
import bag from '../assets/header/bag.png'
import menu from '../assets/header/close.svg'
import ItemCart from '../components/itemcart.jsx'
import actionTypes from '../Redux/cart/actiontype'

export default function cart() {
    //===pega o estado do carrinho===//
    const { activeState } = useSelector(({ cartReducer }) => cartReducer);
    // ===altera o estado de ativo/desativo 
    //  do menu do carrinho de compras===//
    const dispatch = useDispatch();
    const changeActiveState = () => {
    
        dispatch({
            type: actionTypes.active,
        })
    }
    return (
        <section>
            <div id="cart-screen"  className={activeState ? "show-cart":"wrapper-cart-screen"}>
                <div className='header-cart'>
                    <button onClick={changeActiveState} className='menu-div-mobile'>
                        <img src={menu} />
                    </button>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h1>Minhas compras</h1>
                    <img src={bag}></img>
                    </div>
                </div>
                <div className='cart-wrapper-products'>
                    <ItemCart></ItemCart>
                </div>
            </div>

        </section>
    )
}