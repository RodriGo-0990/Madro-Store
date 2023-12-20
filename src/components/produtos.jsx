import "../css/produto.css";
import eye from '../assets/produtos/eye.svg'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import actionTypes from "../Redux/product/product-actiontypes";

export default function Products( {foto, nome, valor, categoria} ) {
    
    const dispatch = useDispatch();

    const changeProductDescribe = () =>{
        window.scrollTo(0, 0);
        dispatch({
            type:actionTypes.REQUEST,
            payload:{foto:foto, nome:nome,valor:valor, categoria:categoria}})
    }

    let valorParcelado = valor / 3;
    // Usando toFixed para definir duas casas decimais e toString para converter em string
    let valorFormatado = valorParcelado.toFixed(2).toString();
    // Substituindo o ponto por uma vírgula
    valorFormatado = valorFormatado.replace('.', ',');
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
                    <button className="button-comprar">COMPRAR</button>
                    <Link to="/Madro-Store/produtodescricao">
                        <button onClick={changeProductDescribe} className="button-ver"><img src={eye} /></button>
                    </Link>
                </div>
            </div>
        </section>
    )
}