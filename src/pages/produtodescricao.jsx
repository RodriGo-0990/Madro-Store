import '../css/produtodescricao.css'
import { useEffect, useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import Overlay from '../components/overlay';
import Header from '../components/header'
import Void from '../components/void'
import Main from '../components/mainProducts'
import Siganos from '../components/siganos'
import Footer from '../components/footer'
import card from '../assets/section/card.svg'
import desconto from '../assets/section/desconto.svg'
import truck from '../assets/section/truck.svg'
import cartActionTypes from "../Redux/cart/actiontype";

export default function ProdutoDescrito() {
    //===pega o estado do carrinho===//
    const { activeState } = useSelector(({ cartReducer }) => cartReducer);


    //================produto para descrição=================//
    //recuperando os valores do produto com Redux
    const { produto } = useSelector((rootReducer) => rootReducer.productReducer)
    const valor = produto.valor;

    //divide o valor em 3x
    let valorParcelado = valor / 3;
    // Usando toFixed para definir duas casas decimais e toString para converter em string
    let valorParceladoFormatado = valorParcelado.toFixed(2).toString();
    let valorFormatado = valor.toFixed(2).toString();
    // Substituindo o ponto por uma vírgula
    valorParceladoFormatado = valorParceladoFormatado.replace('.', ',');
    valorFormatado = valorFormatado.replace('.', ',');
    //=======================================================//

    //==============filtrar produtos relacionados============//
    //recuperando os valores dos produtos com Redux
    const { produtos } = useSelector((rootReducer) => rootReducer.allProducts);
    // Filtra os produtos com base na categoria
    const [produtosRelacionados, setProdutosFiltrados] = useState([]);
    useEffect(() => {
        const filtro = produtos.filter(produtos =>
            produtos.categoria.toLowerCase().includes(produto.categoria.toLowerCase())
        );
        // console.log(produto)
        setProdutosFiltrados(filtro);
    }, [produto, produtos]);
    //=======================================================//

    //=============unidades de produto=======================//
    const [unidades, setUnidades] = useState(1);
    useEffect(() => {
        setUnidades(1);
    }, [produto]);
    function subtrairUnidade() {
        if (unidades != 1) {
            setUnidades(unidades - 1);
        }
    }
    function adicionarUnidade() {
        setUnidades(unidades + 1);
    }
    //=======================================================//
    
    //================mandar para o carrinho=================//
    const foto = produto.foto;
    const nome = produto.nome;
    const dispatch = useDispatch();
    const sendToCart = () =>{
        dispatch({
            type:cartActionTypes.POST,
            payload:{foto:foto,nome:nome,valor:valor,unidades:unidades}
        })
    }

    return (
        <>

            <Overlay isOpen={activeState} />
            <Header />
            <section >
                <div className='marquee'>
                    <marquee>
                        <p>
                            <span><img src={truck} /></span>
                            Frete grátis para região de Florianópolis
                        </p>
                    </marquee>
                </div>
                <div className="content-wrapper-descricao">
                    <div className='image-produto-descricao'>
                        <img src={produto.foto} />
                    </div>
                    <div className='descricao-produto'>
                        <h1>{produto.nome}</h1>
                        <h3>R$ {valorFormatado}</h3>
                        <p>
                            <span><img src={card}></img></span>
                            3x de&nbsp;<strong>R$ {valorParceladoFormatado} sem juros</strong>.
                        </p>
                        <p>
                            <span><img src={desconto}></img></span>
                            10x de desconto pagando no pix.
                        </p>
                        <p>
                            <strong>Atenção,últimas peças!</strong>
                        </p>
                        <div className='buttons-wrapper'>
                            <div className='buttons-quantidade'>
                                <button onClick={subtrairUnidade} >-</button>
                                <div className='qtd'> {unidades} </div>
                                <button onClick={adicionarUnidade}>+</button>
                            </div>

                            <button onClick={sendToCart} className='button-comprar' >
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
                {/* descricao detalhada do produto ainda é fixa para todos */}
                <section>
                    <div className='descricao-detalhada'>
                        <p className='item-descricao'>Óculos de sol com proteção UV400</p>
                        <p className='item-descricao'>Óculos rosa fosco</p>
                        <p className='item-descricao'>Tamanho único</p>
                        <p className='item-descricao'>Acompanha capinha + flanela + pingente quartzo rosa</p>
                        <div className='campo-medidas'>
                            <p>
                                Medida:<br />
                                Largura da lente 4,8cm<br />
                                Altura da lente 4,2cm<br />
                                Largura total 14,4cm<br />
                                Altura Total 4,8cm<br />
                                Ponte 1,4cm<br />
                            </p>
                        </div>
                    </div>
                </section>
                <Void />

                <Main
                    titulo="Produtos Relacionados"
                    produtos={produtosRelacionados}
                />

            </section>
            <Siganos />
            <Void />
            <Footer />

        </>
    )
}