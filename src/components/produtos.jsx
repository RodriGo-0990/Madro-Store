import "../css/produto.css";
export default function products({ foto, nome, valor }) {
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
                </div>
            </div>
        </section>
    )
}