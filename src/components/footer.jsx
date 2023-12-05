import "../css/footer.css"
import master from "../assets/footer/master.svg"
import visa from "../assets/footer/visa.svg"
import pix from "../assets/footer/pix.svg"
import paypal from "../assets/footer/paypal.svg"
import linkedin from "../assets/footer/linkedin.svg"
import instagram from "../assets/footer/instagram.svg"
import facebook from "../assets/footer/facebook.svg"
import whats from "../assets/footer/whats.svg"
import mail from "../assets/footer/mail.png"
import madro from "../assets/header/logo.webp"
import correios from "../assets/footer/correios.png"

export default function () {
    return (
        <footer className="footer">
            <div className="footer-wraper">

                <div className="footer-contacts-wraper">
                    <div className="contatos">
                        <div className="titulo-footer">
                            <h3>Nossas Redes</h3>
                        </div>
                        <div className="icones-redes-footer">
                            <img src={instagram}></img>
                            <img src={linkedin}></img>
                            <img src={facebook}></img>
                        </div>
                    </div>
                    <div className="contatos">
                        <div className="titulo-footer">
                            <h3>Métodos de pagamento</h3>
                        </div>
                        <div className="icones-redes-footer">
                            <img src={master}></img>
                            <img src={visa}></img>
                            <img src={paypal}></img>
                            <img src={pix}></img>
                        </div>
                    </div>
                </div>

                <div className="footer-contacts-wraper-center">
                    <img src={madro} alt="logo"></img>

                </div>
                <div className="footer-contacts-wraper-right">
                    <div className="contatos">
                        <div className="titulo-footer">
                            <h3>Contatos</h3>
                        </div>
                        <div className="icones-redes-footer">
                            <div className="text-contact">
                                <img src={whats} alt="whats"></img>
                                <a>
                                    <p style={{ paddingTop: "4px" }}>
                                        (00)9999-9999
                                    </p>
                                </a>
                            </div>
                            <div className="text-contact">
                                <img src={mail} alt="mail"></img>
                                <a>
                                    <p style={{ paddingTop: "4px" }}>
                                        madro@atendimento.com.br
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contatos">
                        <div className="titulo-footer">
                            <h3>Entrega</h3>
                        </div>
                        <div className="icones-redes-footer-right">
                            <img style={{width:"100px"}} src={correios}></img>
                        </div>
                    </div>

                </div>
            </div>
            <div className="divisao"></div>
            <div className="texto-footer" >
                <p>Aviso: Todos os preços e condições deste site são válidos apenas para compras na loja online e não se aplicam às lojas físicas.

                    © 2023 Todos os direitos reservados. Madro Store CNPJ 00.000.000/0000-00. Rua da praia, 000 - Florianópolis/SC.
                </p></div>

        </footer>
    )
}