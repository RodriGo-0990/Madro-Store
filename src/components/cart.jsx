import '../css/cart.css'
import { useSelector, useDispatch } from 'react-redux'
import bag from '../assets/header/bag.png'
import truck from '../assets/section/truck.svg'
import menu from '../assets/header/close.svg'
import ItemCart from '../components/itemcart.jsx'
import actionTypes from '../Redux/cart/actiontype'
// Teste
import image from '../assets/produtos/brincos/brincos1.jpg'
import image2 from '../assets/produtos/brincos/brincos.jpg'

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
            <div id="cart-screen" className={activeState ? "show-cart" : "wrapper-cart-screen"}>
                <div className='header-cart'>
                    <button onClick={changeActiveState} className='menu-div-mobile'>
                        <img src={menu} />
                    </button>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h1>Minhas compras</h1>
                        <img src={bag}></img>
                    </div>
                </div>
                <div className='cart-wrapper-products'>
                    <ItemCart image={image}
                        descricao="Bincos Dourados"
                        preco="22,90" />
                    <ItemCart image={image2}
                        descricao="Bincos perolas"
                        preco="22,90" />
                         <ItemCart image={image2}
                        descricao="Bincos perolas"
                        preco="22,90" />
                         <ItemCart image={image2}
                        descricao="Bincos perolas"
                        preco="22,90" />
                         <ItemCart image={image2}
                        descricao="Bincos perolas"
                        preco="22,90" />
                         <ItemCart image={image2}
                        descricao="Bincos perolas"
                        preco="22,90" /> <ItemCart image={image2}
                        descricao="Bincos perolas"
                        preco="22,90" />
                         <ItemCart image={image2}
                        descricao="Bincos perolas"
                        preco="22,90" />
                </div>
                <div className='subtotal-Wrapper-div'>
                    <div className='subtotal-content' >
                        <h5>Subtotal(sem frete):</h5>
                        <h5>R$00,00</h5>
                    </div>
                </div>
                <div className='fretecalc-wrapper-div'>
                    <div className='fretecalc-content'>
                        <div className='linha'>
                            <p><span><img src={truck} /> </span>Meios de envio</p>
                        </div>
                        <div className='input-fretecalc-div'>
                            <input className="input-fretecalc" type="text" placeholder='Digite seu cep' />
                            <button className='button-fretecalc' type='submit'>CALCULAR</button>
                        </div>
                        <a href='https://buscacepinter.correios.com.br/app/endereco/index.php' target='blank'>Não sei meu cep</a>
                    </div>
                </div>
                <div className='payment-wrapper'>
                    <div className='price-wrapper' >
                        <h1>Total: </h1>
                        <div style={{ textAlign: 'end' }}>
                            <h1>R$00,00</h1>
                            <p>ou até <strong>R$00,00</strong> sem juros.</p>
                        </div>
                    </div>
                    <div className='button-div-payment'>
                        <button style={{ width: "80%" }} className='button-comprar'>
                            IR PARA PAGAMENTO
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}