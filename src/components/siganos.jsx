import "../css/siganos.css"
import image from "../assets/footer/icons8-instagram-logo.svg"
export default function Siganos() {
    return (

        <div className="main-wrapper">
            <section className="siganos-wrapper">
                <div className="titulo-siganos">
                    <img src={image}></img>
                    <h1>madro.storee</h1>
                </div>
                <div className="text" >
                    <p>Estamos no Instagram</p>
                </div>
                <div>
                    <a href="" rel="noopener noreferrer" target="_blank">
                        <button className="button">
                            SIGA-NOS
                        </button>
                    </a>
                </div>
            </section>
        </div>
    )
}