import '../css/itemcart.css'
import trash from '../assets/header/trash.svg'
export default function ItemCart(props) {
    return (
        <section className="main-div-itemcart">
            <div className="wrapper-content-itemcart" >
                <div className="image-produto-itemcart">
                    <img src={props.image} />
                </div>
                <div className="describe-produto-itemcart">
                    <h1>{props.descricao}</h1>
                    <div className='buttons-quantidade'>
                        <button>-</button>
                        <div className='qtd'> 0 </div>
                        <button>+</button>
                    </div>
                </div>
                <div className="preco-produto-itemcart">
                    <h1>R$ {props.preco}</h1>
                </div>
                <button className="button-exclude-itemcart">
                    <img src={trash} />
                </button>
            </div>
        </section>
    );
};