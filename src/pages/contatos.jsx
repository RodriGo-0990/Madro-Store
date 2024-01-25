import '../css/formulario.css'
import { useSelector } from "react-redux";
import Overlay from '../components/overlay'
import Header from "../components/header"
import Footer from '../components/footer'
import Void from '../components/void'
import Siganos from '../components/siganos'
export default function Contatos() {
    //===pega o estado do carrinho===//
    const { activeState } = useSelector(({ cartReducer }) => cartReducer);
    return (
        <>
            <Overlay isOpen={activeState} />
            <Header />
            <Void />
            <div className="wrapper-contact">
                <h1>Contatos</h1>
                <p className='subtitle'>Mande sua mensagem</p>
                <form className="wrapper-form">
                    <label>Nome Completo</label>
                    <input type='text' />
                    <label>E-mail</label>
                    <input type='text' />
                    <label>Telefone</label>
                    <input type='text' />
                    <label>Mensagem</label>
                    <textarea type='textarea' />
                    <button disabled className='submit'>Enviar</button>
                </form>
            </div>
            <Void />
            <Siganos />
            <Void />
            <Footer />
        </>

    )

}