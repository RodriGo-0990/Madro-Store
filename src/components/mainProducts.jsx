import "../css/main.css"
import Product from "./produtos";
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
export default function MainProdructs(props) {
    /*muda quantidade de itens que aparecem em tela sobre o 
    carrosel de produtos de acordo 
    com o tamanho da tela*/
    const [slidePerView, setSlidePerview] = useState(4);

    useEffect(() => {

        function handleResize() {

            setSlidePerview(window.innerWidth < 500 ? 1 : window.innerWidth < 1000 ? 3 : 4)

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
                    {props.produtos.length != 0 ? props.produtos.map((produto, index) => (
                        <SwiperSlide key={index}>
                            <Product
                                foto={produto.foto}
                                nome={produto.nome}
                                valor={produto.valor}
                                categoria={produto.categoria}
                                descricao={produto.descricao}
                                descricaoComplementar={produto.descricaoComplementar}
                            />
                        </SwiperSlide>
                    ))
                    : <p className="errormsg">Falha ao carregar produtos!</p>}
                </Swiper>
            </section>
            <div className="div-slider-button">
            </div>
        </main>
    )
}