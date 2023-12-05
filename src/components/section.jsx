import "../css/sectionImage.css";
import image from "../assets/section/papper.webp";
import truck from "../assets/section/icons8-truck-50.png";
import desconto from "../assets/section/desconto.png";
import parcela from "../assets/section/fatura.png";

export default function SectionImage() {

    return (
        <div className="container">
            <div className="image-container">
                <img src={image}></img>
            </div>
            <div className="frete-wraper">
                <div className="fret-cart">
                    <div className="img-div">
                        <img src={truck} alt="entrega"></img>
                    </div>
                    <h4>Frete Grátis</h4>
                    <p>para região de Florianópolis</p>
                </div>
                <div className="card-wraper">
                    <div className="img-div">
                        <img  src={parcela} alt="parcela"></img>
                    </div>
                    <h4>Parcelamento</h4>
                    <p>até 10x sem juros</p>
                </div>
                <div className="pix-wraper">
                    <div className="img-div">
                        <img src={desconto} alt="desconto"></img>
                    </div>
                    <h4>10% de desconto</h4>
                    <p>para pagamendos no pix</p>
                </div>
            </div>
        </div>
    )
}