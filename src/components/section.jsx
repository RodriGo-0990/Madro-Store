import { useState, useEffect } from "react";
import truck from "../assets/section/truck.svg";
import desconto from "../assets/section/desconto.svg";
import parcela from "../assets/section/card.svg";
import "../css/sectionImage.css";
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
        { id: "1", image: "http://source.unsplash.com/random/1000x250/?sunglasses-pink" },
        { id: "2", image: "http://source.unsplash.com/random/1000x250/?necklace" },
        { id: "3", image: "http://source.unsplash.com/random/1000x250/?lipstick" },
        { id: "4", image: "http://source.unsplash.com/random/1000x250/?ring" }
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