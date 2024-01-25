import "../css/newsletter.css"
import img from "../assets/section/arrow.png"
export default function Newsletter() {
    return (

        <div className="news-wrapper">
            <section className="dados-wrapper">
                <div className="titulo-news">
                    <h3>NEWSLETTER</h3>
                </div>
                <div className="text-news" >
                    <h1>Receba todas as promoções</h1>
                </div>
                <div className="sub-text-news" >
                    <p>Quer receber nossas ofertas? Cadastre seu email e começe a recebê-las!</p>
                </div>
                <div className="input-email-div">
                    <input type={"email"} placeholder={" Email"} className="input-area">
                    </input>
                    <button type="submit" className="button-submit">
                        <img src={img}></img>
                    </button>
                </div>
            </section>
        </div>
    )
}