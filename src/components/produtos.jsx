import "../css/produto.css";
import aneis from "../assets/colares/brincos.jpg"
export default function products(){
    
    return(
        <section className="produto-wraper">
            <div className="produto">
                <img className="imagens-produtos" src={aneis} alt="produto-foto"></img>
                <h5 className="nome-produto" >Nome do produto</h5>
                <div className="valor-produto">R$ 00,00</div>
                <div className="parcelamento">3x de <strong>R$00,00</strong> sem juros</div>
                <div className="div-button-comprar">
                    <button className="button-comprar">COMPRAR</button>
                </div>
            </div>
        </section>
    )
}