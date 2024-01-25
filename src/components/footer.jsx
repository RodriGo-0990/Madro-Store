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
import google from "../assets/footer/selogoogle.webp";

export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer-wraper">

                <div className="footer-contacts-wraper">
                    <div className="contatos">
                        <div className="titulo-footer">
                            <h3>NOSSAS REDES</h3>
                        </div>
                        <div className="icones-redes-footer">
                            <img src={instagram}></img>
                            <img src={linkedin}></img>
                            <img src={facebook}></img>
                        </div>
                    </div>
                </div>
                <div className="footer-contacts-wraper">
                    <div className="contatos">
                        <div className="titulo-footer">
                            <h3>PAGAMENTO</h3>
                        </div>
                        <div className="icones-redes-footer">
                            <img src={master}></img>
                            <img src={visa}></img>
                            <img src={paypal}></img>
                            <img src={pix}></img>
                        </div>
                    </div>
                </div>
                <div className="footer-contacts-wraper">
                    <div className="contatos">
                        <div className="titulo-footer">
                            <h3>SEGURANÇA</h3>
                        </div>
                        <div className="icones-redes-footer">
                            <img style={{ width: "100px" }} src={google}></img>
                           
                        </div>
                    </div>
                </div>
               
                <div className="footer-contacts-wraper">
                    <div className="contatos">
                        <div className="titulo-footer">
                            <h3>ENTREGA</h3>
                        </div>
                        <div className="icones-redes-footer">
                            <img style={{ width: "100px" }} src={correios}></img>
                        </div>
                    </div>
                </div>

                <div className="footer-contacts-wraper">
                    <div className="contatos">
                        <div className="titulo-footer">
                            <h3>CONTATOS</h3>
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
                </div>
                <div className="footer-contacts-wraper">
                    <div className="contatos">
                        <div className="titulo-footer">
                            <h3>DEPARTAMENTOS</h3>
                        </div>
                        <div className="deptos">
                            
                                <a><p>Inicio</p></a>
                                <a><p>Produtos</p></a>
                                <a><p>Fale conosco</p></a>
                            
                        </div>
                    </div>
                </div>


               

            </div>
            <div className="footer-contacts-wraper-center">
                <img src={madro} alt="logo"></img>
            </div>
            <div className="divisao"></div>
            <div className="texto-footer" >
                <p>© 2023 Todos os direitos reservados. Madro Store CNPJ 00.000.000/0000-00.
                </p></div>

        </footer>
    )
}