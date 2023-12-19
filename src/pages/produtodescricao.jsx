import '../css/produtodescricao.css'
import { useEffect } from 'react'
import Header from '../components/header'
import Void from '../components/void'
import Main from '../components/mainProducts'
import Produtos from '../components/mainProducts'
import Siganos from '../components/siganos'
import Footer from '../components/footer'

// imagens
import brincos2 from "../assets/produtos/brincos/brincos.webp"
import argolasmile from "../assets/produtos/brincos/argolasmile.webp"
import colarestrela from "../assets/produtos/colar/colarestrela.webp"
import oculos from "../assets/produtos/oculos/oculos.webp"
import oculos2 from "../assets/produtos/oculos/oculos2.webp"
import pulseira from "../assets/produtos/pulseira/pulseiracoracao.webp"

import image from '../assets/produtos/oculos/oculos2.webp'
import card from '../assets/section/card.svg'
import desconto from '../assets/section/desconto.svg'
import truck from '../assets/section/truck.svg'

export default function ProdutoDescrito() {
    useEffect(() => {
        // A função dentro de useEffect será executada quando o componente for montado ou atualizado
        window.scrollTo(0, 0);
    }, []); 
    const produtosDestaque = [
        <Produtos foto={brincos2} nome={"Brincos Argola Friz"} valor={29.90} />,
        <Produtos foto={argolasmile} nome={"Argola Smile"} valor={29.95} />,
        <Produtos foto={colarestrela} nome={"Colar Estrela"} valor={28.90} />,
        <Produtos foto={oculos} nome={"Óculos cat"} valor={109.90} />,
        <Produtos foto={oculos2} nome={"Óculos Pink"} valor={109.90} />,
        <Produtos foto={pulseira} nome={"Pulseira Coração"} valor={26.90} />]
    return (
        <>
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
                        <img src={image} />
                    </div>
                    <div className='descricao-produto'>
                        <h1>Óculos Pink</h1>
                        <h3>R$109,90</h3>
                        <p>
                            <span><img src={card}></img></span>
                            3x de&nbsp;<strong>R$ 00,00 sem juros</strong>.
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
                                <button>-</button>
                                <div className='qtd'> 0 </div>
                                <button>+</button>
                            </div>

                            <button className='button-comprar' >
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
                                Medida:<br/>
                                Largura da lente 4,8cm<br/>
                                Altura da lente 4,2cm<br/>
                                Largura total 14,4cm<br/>
                                Altura Total 4,8cm<br/>
                                Ponte 1,4cm<br/>
                            </p>
                        </div>
                    </div>
                </section>
                <Void />

                <Main
                    titulo="Produtos Relacionados"
                    produtos={produtosDestaque}
                />

            </section>
            <Siganos />
            <Void />
            <Footer />

        </>
    )
}