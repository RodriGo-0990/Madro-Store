import '../../css/formulario.css'
import Header from "../../components/header"
import Footer from '../../components/footer'
import Siganos from '../../components/siganos'
import Void from '../../components/void'

export default function Login() {
    return (
        <>
            <Header />
            <Void/>
            <div className="wrapper-contact">
                <h1>Iniciar sessão</h1>
                <p className='subtitle'>Compre mais rápido e acompanhe seus pedidos.</p>
                <form className="wrapper-form">
                <label>E-mail</label>
                <input type='text'/>
                <label>Senha</label>
                <input type='password'/>
                <button disabled className='submit'>Entrar</button>
                </form>
            </div>
            <Void/>
            <Siganos/>
            <Void/>
            <Footer />
        </>

    )

}