import "../css/main.css"
import Product from "./produtos";
import {useEffect,useState} from "react"
import { Swiper, SwiperSlide } from "swiper/react";
export default function main() {

    /*muda os itens que aparecem em tela sobre o 
    carrosel de frete,desconto,parcelamento de acordo 
    com o tamanho da tela*/
    const [slidePerView, setSlidePerview] = useState(3)
    
    useEffect(() =>{

        function handleResize() {
          if(window.innerWidth < 600){
            setSlidePerview(1)
          }
          else{
            setSlidePerview(4)
          }  
        }
        handleResize();

        window.addEventListener("resize",handleResize)
    },[])

    return (
        <main className="main-div">
            <div className="titulo">
                <h1>Destaques</h1>
            </div>
            <section  >
                <Swiper
                    slidesPerView={slidePerView}
                    pagination={{ clickable: true }}
                    navigation={{ enabled: true }}
                    className="main"
                    >
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                </Swiper>
            </section>
            <div className="div-slider-button">
            </div>
        </main>
    )
}