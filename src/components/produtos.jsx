import "../css/produto.css";
import eye from '../assets/produtos/eye.svg'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import actionTypes from "../Redux/product/product-actiontypes";
import cartActionTypes from "../Redux/cart/actiontype";
import { useState } from "react";

export default function Products( {foto, nome, valor, categoria} ) {
    const[loading ,setloading] = useState(false);
    const dispatch = useDispatch();
    //mandar os dados do produto para 
    //a pagina de descrição doproduto
    const changeProductDescribe = () =>{
        window.scrollTo(0, 0);
        dispatch({
            type:actionTypes.REQUEST,
            payload:{foto:foto, nome:nome,valor:valor, categoria:categoria}})
    }
    const sendToCart = () =>{
        setisloading();
        dispatch({
            type:cartActionTypes.POST,
            payload:{foto:foto,nome:nome,valor:valor,unidades:1}
        })
    }
    let valorParcelado = valor / 3;
    // Usando toFixed para definir duas casas decimais e toString para converter em string
    let valorFormatado = valorParcelado.toFixed(2).toString();
    // Substituindo o ponto por uma vírgula
    valorFormatado = valorFormatado.replace('.', ',');
    // loading botão compra
    function setisloading() {
        setloading(!loading)
        setTimeout(() => {
            setloading(loading)
        }, 2000); 
      }
    return (
        <section className="produto-wraper">
            <div className="produto">
                <div className="image-produto">
                    <img src={foto} alt="produto-foto"></img>
                </div>
                <h5 className="nome-produto" >{nome}</h5>
                <div className="valor-produto">R$ {valor.toFixed(2)}</div>
                <div className="parcelamento"><p>3x de <strong> R$ {valorFormatado}</strong> sem juros</p></div>
                <div className="div-button-comprar">
                    <button id="botaoCompra" 
                            onClick={sendToCart} 
                            className={!loading ? "button-comprar" : "button-loading"}
                            disabled ={loading} >
                            {!loading? "COMPRAR": ""}
                    </button>
                    <Link to="/Madro-Store/produtodescricao">
                        <button onClick={changeProductDescribe} className="button-ver"><img src={eye} /></button>
                    </Link>
                </div>
            </div>
        </section>
    )
}