import "../css/main.css"
import Product from "./produtos";
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
export default function Main(props) {
    
    /*muda quantidade de itens que aparecem em tela sobre o 
    carrosel de produtos de acordo 
    com o tamanho da tela*/
    const [slidePerView, setSlidePerview] = useState(3)

    useEffect(() => {

        function handleResize() {

            setSlidePerview(window.innerWidth < 500 ? 1 : 4)

        }
        handleResize();

        window.addEventListener("resize", handleResize)
    }, [])

    return (
        <main className="main-div">
            <div className="titulo">
                <h1>{props.titulo}</h1>
            </div>
            <section  >
                <Swiper
                    slidesPerView={slidePerView}
                    spaceBetween={300}
                    pagination={{ clickable: true }}
                    navigation={{ enabled: true }}
                    className="main"
                    loop={true}
                    centeredSlides={true}
                    initialSlide={3}
                >
                    <SwiperSlide>
                        <Product 
                            foto={props.fotos[0]}
                            produto={props.valores[0]}
                            nome={props.nomes[0]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product 
                            foto={props.fotos[1]}
                            produto={props.valores[1]}
                            nome={props.nomes[1]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product 
                            foto={props.fotos[2]}
                            produto={props.valores[2]}
                            nome={props.nomes[2]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product 
                            foto={props.fotos[3]}
                            produto={props.valores[3]}
                            nome={props.nomes[3]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product 
                            foto={props.fotos[4]}
                            produto={props.valores[4]}
                            nome={props.nomes[4]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product 
                            foto={props.fotos[5]}
                            produto={props.valores[5]}
                            nome={props.nomes[5]} />
                    </SwiperSlide>

                </Swiper>
            </section>
            <div className="div-slider-button">
            </div>
        </main>
    )
}