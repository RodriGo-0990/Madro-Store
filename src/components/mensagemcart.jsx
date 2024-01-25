import '../css/msgcart.css'
import imagem from '../assets/header/warning.svg'

export default function msgcart({ativo}){
    return(
        
        <div className={ativo ? 'show-msgcart' : 'msgcart'}>
            <p >
                <span><img src={imagem}/></span>
                Produto adicionado ao carrinho!
            </p>
        </div>
        
    )
}