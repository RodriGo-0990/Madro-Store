import "../css/produto.css";
import aneis from "../assets/colares/brincos.jpg"
export default function products(){
    
    return(
        <section className="produto-wraper">
            <div className="produto">
                <img className="imagens-produtos" src={aneis} alt="produto-foto"></img>
                <h2 className="nome-produto" >Nome do produto</h2>
                <div className="valor-produto">00,00 R$</div>
                <div className="div-button-comprar">
                    <button className="button-comprar">COMPRAR</button>
                </div>
            </div>
        </section>
    )
}