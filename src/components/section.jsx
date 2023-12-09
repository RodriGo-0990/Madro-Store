import React,{useEffect,useState} from "react";
import image from "../assets/section/papper.webp";
import image2 from "../assets/section/fundo.jpg";
import truck from "../assets/section/icons8-truck-50.png";
import desconto from "../assets/section/desconto.png";
import parcela from "../assets/section/fatura.png";
import "../css/sectionImage.css";
import { Swiper,SwiperSlide } from "swiper/react";

export default function SectionImage() {
    let itemAtual = 0;
    const handleClick = () => {
        const prev = document.getElementById("previous");
        const next = document.getElementById("next");
        const listImages = document.querySelectorAll(".item");
        const maxItens = listImages.length; 
        prev.onclick = () => itemAtual = itemAtual -1;
        next.onclick = () => itemAtual = itemAtual +1;
        
        if (itemAtual >= maxItens) {
            itemAtual = 0;
        }
        if (itemAtual < 0) {
            itemAtual = maxItens - 1;
        }
        listImages[itemAtual].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
    };
    // TODO - a rolagem automática do banner coloca a pagina no topo - descobrir outra solução -
    //     let itemAtualAuto = 0; 
    // setInterval( function () {
    //     const listImages = document.querySelectorAll(".item");
    //     const maxItens = listImages.length; 
    //     itemAtualAuto++
    //     if (itemAtualAuto >= maxItens) {
    //         itemAtualAuto = 0;
    //     }
    //     if (itemAtualAuto < 0) {
    //         itemAtualAuto = maxItens - 1;
    //     }
    //     listImages[itemAtualAuto].scrollIntoView({
    //         inline: "center",
    //         block: "nearest",
    //         behavior: "smooth"
    //     })
    //     console.log(itemAtualAuto);
    // },10000)

    return (
        <div className="container">

            <div className="image-container">
                <button onClick={handleClick} id="previous" type="button" aria-label="previous" className="left-button-arrow">..</button>
                <button onClick={handleClick} id="next" type="button" aria-label="next" className="right-button-arrow">..</button>
                <div className="image-container-wrap">
                    <img className="item" src={image}></img>
                    <img className="item" src={image2}></img>
                    <img className="item" src={image}></img>
                </div>
            </div>
            <div className="div-slider-button">
                <input type="radio" className="slider-button"></input>
                <input type="radio" className="slider-button"></input>
                <input type="radio" className="slider-button"></input>
            </div>
            <div className="frete-wraper">
                <div className="fret-cart">
                    <div className="img-div">
                        <img src={truck} alt="entrega"></img>
                    </div>
                    <h4>FRETE GRÁTIS</h4>
                    <p>Para região de Florianópolis</p>
                </div>
                <div className="card-wraper">
                    <div className="img-div">
                        <img src={parcela} alt="parcela"></img>
                    </div>
                    <h4>PARCELAMENTO</h4>
                    <p>Até 10x sem juros</p>
                </div>
                <div className="pix-wraper">
                    <div className="img-div">
                        <img src={desconto} alt="desconto"></img>
                    </div>
                    <h4>10% DE DESCONTO</h4>
                    <p>Para pagamendos no pix</p>
                </div>
            </div>
        </div>
    )
}