import '../css/cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import bag from '../assets/header/bag.png'
import truck from '../assets/section/truck.svg'
import menu from '../assets/header/close.svg'
import ItemCart from '../components/itemcart.jsx'
import actionTypes from '../Redux/cart/actiontype'
import calculateFrete from '../api/api-correios'
import ItemFrete from '../components/itemfrete'
import warning from '../assets/header/warning.svg'


export default function cart() {
    //===pega o estado do carrinho===//
    const {valorFrete, frete, produtos, activeState } = useSelector(({ cartReducer }) => cartReducer);
    // ===altera o estado de ativo/desativo 
    //  do menu do carrinho de compras===//
    const dispatch = useDispatch();
    const changeActiveState = () => {
        dispatch({
            type: actionTypes.active,
        })
    }
    const [subtotal, setSubtotal] = useState(0);
    useEffect(() => {
        // Calcula subtotal quando a lista de produtos se altera
        const newSubtotal = (produtos.length > 0 ? produtos.reduce((acc, item) => acc + item.valorsomado, 0) : 0);
        setSubtotal(newSubtotal);
    }, [produtos]);

    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(parseFloat(valorFrete) + parseFloat(subtotal))
    }, [subtotal,valorFrete])

    //===string de cep escrita no input===//
    const [cep, setCep] = useState("");
    const handleCepChange = (event) => {
        setCep(event.target.value);
    };

    //===formatar strings de preço===//
    function formString(string) {
        return string.replace('.', ',');
    }

    console.log(valorFrete)
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
                    {produtos.map((product, index) => (
                        <ItemCart
                            key={product.id}
                            image={product.foto}
                            descricao={product.nome}
                            valor={product.valor}
                            unidades={product.unidades}
                            id={product.id}
                        />
                    ))}
                    <div className='msg-produtos' style={produtos.length == 0 ?{display:"block"}:{display:"none"}}>
                        <p style={{color:"#daabbd" , alignItems:"center", display:"flex"}}><span><img style={{width:"20px"}} src={warning} alt='icon'/></span>Seu carrinho está vazio</p>
                    </div>
                </div>
                <div style={produtos.length==0?{display:"none"}:{display:"block"}} className='subtotal-Wrapper-div'>
                    <div className='subtotal-content' >
                        <h5>Subtotal(sem frete):</h5>
                        <h5>R${formString(subtotal.toFixed(2).toString())}</h5>
                    </div>
                </div>
                <div style={produtos.length==0?{display:"none"}:{display:"block"}} className='fretecalc-wrapper-div'>
                    <div className='fretecalc-content'>
                        <div className='linha'>
                            <p><span><img src={truck} /> </span>Meios de envio</p>
                        </div>
                        <div className='input-fretecalc-div'>
                            <input className="input-fretecalc" onChange={handleCepChange} type="text" placeholder='Digite seu cep' />
                            <button className='button-fretecalc' onClick={() => calculateFrete(dispatch, cep)} >CALCULAR</button>
                        </div>
                        <a href='https://buscacepinter.correios.com.br/app/endereco/index.php' target='blank'>Não sei meu cep</a>
                    </div>
                </div>
                <div style={produtos.length==0?{display:"none"}:{display:"block"}} className='frete-options-wrapper'>
                    {frete && frete.data && frete.data[0]?.price && (
                        <ItemFrete
                            prazo={frete.data[0].custom_delivery_time}
                            valor={frete.data[0].price}
                            nome="PAC"
                        />
                    )}
                    {frete && frete.data && frete.data[1]?.price && (
                        <ItemFrete
                            prazo={frete.data[1].custom_delivery_time}
                            valor={frete.data[1].price}
                            nome="SEDEX"
                        />
                    )}
                    <p style={{ fontSize: "12px" }}>O prazo de entrega <strong> não contabiliza feriados.</strong></p>
                </div>
                <div style={produtos.length==0 || valorFrete==0 ?{display:"none"}:{display:"block"}} className='payment-wrapper'>
                    <div className='price-wrapper'>
                        <h1>Total: </h1>
                        <div style={{ textAlign: 'end' }}>
                            <h1>R${formString(total.toFixed(2).toString())}</h1>
                            <p>ou até 3x de <strong>R${formString((total / 3).toFixed(2).toString())}</strong> sem juros.</p>
                        </div>
                    </div>
                    <div className='button-div-payment'>
                        <button style={{ width: "80%" }} disabled={true} className='button-comprar'>
                            IR PARA PAGAMENTO
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}