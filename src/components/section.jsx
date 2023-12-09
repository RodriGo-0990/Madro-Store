import { useState,useEffect } from "react";
import image from "../assets/section/papper.webp";
import image2 from "../assets/section/fundo.jpg";
import truck from "../assets/section/icons8-truck-50.png";
import desconto from "../assets/section/desconto.png";
import parcela from "../assets/section/fatura.png";
import "../css/sectionImage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from 'swiper/modules'


export default function SectionImage() {
    const data = [
        { id: "1", image: image },
        { id: "2", image: image2 },
        { id: "3", image: image },
        { id: "4", image: image2 }
    ]

    return (
        <div className="container">

            <div className="image-container">

                <Swiper
                    modules={[EffectFade, Autoplay]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={{ enabled: true }}
                    effect="fade"
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
                pagination={{enabled:true}}
                slidesPerView={1}
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