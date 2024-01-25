import '../../css/formulario.css'
import { useSelector } from "react-redux";
import Overlay from '../../components/overlay'
import Header from "../../components/header"
import Footer from '../../components/footer'
import Siganos from '../../components/siganos'
import Void from '../../components/void'

export default function Login() {
    //===pega o estado do carrinho===//
    const { activeState } = useSelector(({ cartReducer }) => cartReducer);
    return (
        <>
            <Overlay isOpen={activeState} />
            <Header />
            <Void />
            <div className="wrapper-contact">
                <h1>Iniciar sessão</h1>
                <p className='subtitle'>Compre mais rápido e acompanhe seus pedidos.</p>
                <form className="wrapper-form">
                    <label>E-mail</label>
                    <input type='text' />
                    <label>Senha</label>
                    <input type='password' />
                    <button disabled className='submit'>Entrar</button>
                </form>
            </div>
            <Void />
            <Siganos />
            <Void />
            <Footer />
        </>

    )

}