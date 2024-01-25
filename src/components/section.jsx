import "../css/sectionImage.css";

import dicanatal from "../assets/madro/dica_natal.jpeg";
import dicamae from "../assets/madro/dica_mae.jpeg";
import dicaamiga from "../assets/madro/amiga.jpeg";
import dicairma from "../assets/madro/irma.jpeg";
import novidades from "../assets/madro/novidades.jpg";


import truck from "../assets/section/truck.svg";
import desconto from "../assets/section/desconto.svg";
import parcela from "../assets/section/card.svg";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from 'swiper/modules'


export default function SectionImage() {
    
    /*muda os itens que aparecem em tela sobre o 
    carrosel de frete,desconto,parcelamento de acordo 
    com o tamanho da tela*/
    const [slidePerView, setSlidePerview] = useState(3)
    
    useEffect(() =>{

        function handleResize() {
          if(window.innerWidth < 700){
            setSlidePerview(1)
          }else{
            setSlidePerview(3)
          }  
        }
        handleResize();

        window.addEventListener("resize",handleResize)
    },[])

    const data = [
        { id: "1", image: dicanatal },
        { id: "2", image: dicamae },
        { id: "3", image: dicairma},
        { id: "4", image: dicaamiga },
        { id: "5", image: novidades}
    ]

    return (
        <div className="container">

            <div className="image-container">

                <Swiper
                    modules={[EffectFade, Autoplay]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={{ enabled: true }}
                    loop="4"
                    autoplay={{ delay: 5000 }}
                    className="swiper"

                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id} >
                            <img src={item.image}
                                alt="banner"
                                className="image-banner" />
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
            <div className="div-slider-button">
            </div>
            <Swiper
                modules={[]} 
                pagination={{ clickable: true }}
                slidesPerView={slidePerView}
                className="frete-wraper">
                <SwiperSlide className="fret-cart">
                    <div className="img-div">
                        <img src={truck} alt="entrega"></img>
                    </div>
                    <h4>FRETE GRÁTIS</h4>
                    <p>Para região de Florianópolis</p>
                </SwiperSlide>
                <SwiperSlide className="card-wraper">
                    <div className="img-div">
                        <img src={parcela} alt="parcela"></img>
                    </div>
                    <h4>PARCELAMENTO</h4>
                    <p>Até 10x sem juros</p>
                </SwiperSlide>
                <SwiperSlide className="pix-wraper">
                    <div className="img-div">
                        <img src={desconto} alt="desconto"></img>
                    </div>
                    <h4>10% DE DESCONTO</h4>
                    <p>Para pagamendos no pix</p>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}