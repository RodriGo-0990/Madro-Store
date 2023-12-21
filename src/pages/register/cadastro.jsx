import '../../css/formulario.css'
import { useSelector } from "react-redux";
import Overlay from '../../components/overlay'
import Header from "../../components/header"
import Footer from '../../components/footer'
import Siganos from '../../components/siganos'
import Void from '../../components/void'
export default function Cadastro() {
     //===pega o estado do carrinho===//
     const { activeState } = useSelector(({ cartReducer }) => cartReducer);
    return (
        <>  
            <Overlay isOpen={activeState} />
            <Header />
            <Void/>
            <div className="wrapper-contact">
                <h1>Crie uma conta</h1>
                <p className='subtitle'>Compre mais rápido e acompanhe seus pedidos.</p>
                <form className="wrapper-form">
                <label>Nome Completo</label>
                <input type='text'/>
                <label>E-mail</label>
                <input type='text'/>
                <label>Telefone</label>
                <input type='text'/>
                <label>Senha</label>
                <input type='password'/>
                <label>Confirmar senha</label>
                <input type='password'/>
                <button disabled className='submit'>Criar</button>
                </form>
            </div>
            <Void/>
            <Siganos/>
            <Void/>
            <Footer />
        </>

    )

}