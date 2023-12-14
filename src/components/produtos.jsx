import "../css/produto.css";
export default function products({foto, nome, produto}){
    
    return(
        <section className="produto-wraper">
            <div className="produto">
                <div className="image-produto">
                <img  src={foto} alt="produto-foto"></img>
                </div>
                <h5 className="nome-produto" >{nome}</h5>
                <div className="valor-produto">R$ {produto}</div>
                <div className="parcelamento">3x de <strong>R$00,00</strong> sem juros</div>
                <div className="div-button-comprar">
                    <button className="button-comprar">COMPRAR</button>
                </div>
            </div>
        </section>
    )
}