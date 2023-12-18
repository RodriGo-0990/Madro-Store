import '../css/paginaprodutos.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from '../components/mainProducts'
import Header from '../components/header'
import Footer from '../components/footer'
import Produtos from '../components/produtos'
import Paralax from "../components/paralaxsection";
import Void from '../components/void'
import Siganos from '../components/siganos'

// images
import brincos2 from "../assets/produtos/brincos.webp"
import argolasmile from "../assets/produtos/argolasmile.webp"
import colarestrela from "../assets/produtos/colarestrela.webp"
import oculos from "../assets/produtos/oculos.webp"
import oculos2 from "../assets/produtos/oculos2.webp"
import pulseira from "../assets/produtos/pulseiracoracao.webp"
import brincos from "../assets/produtos/brincos.jpg"
import brincos1 from "../assets/produtos/brincos1.jpg"
import colar from "../assets/produtos/colar.png"
import colar2 from "../assets/produtos/colar2.png"
import colarcoracao from "../assets/produtos/colarcoracao.png"
import colarcoracao2 from "../assets/produtos/colarcoracao2.png"

export default function PaginaProdutos() {
    // base de produtos
    const produtoObjetos = [
        <Produtos foto={brincos2} nome={"Brincos Argola Friz"} valor={29.90} />,
        <Produtos foto={argolasmile} nome={"Brinco Argola Smile"} valor={29.95} />,
        <Produtos foto={colarestrela} nome={"Colar Estrela"} valor={28.90} />,
        <Produtos foto={oculos} nome={"Óculos cat"} valor={109.90} />,
        <Produtos foto={oculos2} nome={"Óculos Pink"} valor={109.90} />,
        <Produtos foto={pulseira} nome={"Pulseira Coração"} valor={26.90} />,
        <Produtos foto={brincos} nome={"Brincos dourados"} valor={23.90} />,
        <Produtos foto={brincos1} nome={"Brincos perolas"} valor={28.75} />,
        <Produtos foto={colar} nome={"Colar Pingente prata"} valor={28.90} />,
        <Produtos foto={colar2} nome={"Colar de pedra roxa"} valor={33.90} />,
        <Produtos foto={colarcoracao} nome={"Colar Coração de prata"} valor={34.90} />,
        <Produtos foto={colarcoracao2} nome={"Colar S2 Amor para sempre S2"} valor={44.90} />,]

    //capturar a categoria pela URL 
    const { categorie } = useParams();
    //seta categoria ou produtos gerais
    const [categoria, setCategory] = useState();
    useEffect(() => {
        if (categorie == null ?
            setCategory("Produtos") : setCategory(categorie));
    }, [categorie])

    // "pesquisa" os produtos por nome e retorna a lista
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    useEffect(() => {
        if(categorie != null){
        // Filtra os produtos com base na categoria
        const Filtro = produtoObjetos.filter(produto =>
            produto.props.nome.toLowerCase().includes(categorie.toLowerCase())
        );
        setProdutosFiltrados(Filtro);
        }else{
            setProdutosFiltrados(produtoObjetos);
        }
    }, [categorie]);

    return (
        <>
            <Header />
            <Void />
            <section className='main-content'>
                <div className='mid-content' >
                    <div className='title'>
                        <h1>{categoria}</h1>
                    </div>
                    <div className='content-wide-screen'>
                        {produtosFiltrados.map((produto, index) => (
                            <React.Fragment key={index}>
                                {produto}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
            {/* componente swiper para telas mobile */}
            <div className='content-mobile'>
                <Main
                    titulo={categoria}
                    produtos={produtosFiltrados}
                />
            </div>
            <Void />
            <Paralax foto="http://source.unsplash.com/random/1400x850/?gift" />
            <Void />
            <Siganos />
            <Void />
            <Footer />
        </>
    )
}