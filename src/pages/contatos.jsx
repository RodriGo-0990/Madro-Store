import '../css/contatos.css'
import Header from "../components/header"
import Footer from '../components/footer'
import { Form } from 'react-router-dom'
export default function Contatos() {
    return (
        <>
            <Header />
            <div className="wrapper-contact">
                <h1>contatos</h1>
                <form className="wrapper-form">
                <label>Nome Completo</label>
                <input type='text'/>
                <label>E-mail</label>
                <input type='text'/>
                <label>Telefone</label>
                <input type='text'/>
                <label>Mensagem</label>
                <textarea type='textarea'/>
                <button className='submit'>Enviar</button>
                </form>
            </div>
            <Footer />
        </>

    )

}