import "../css/main.css"
import Product from "./produtos";

export default function main() {
    return (
        <main className="main-div">
            <div className="titulo">
                <h1>DESTAQUES</h1>
            </div>
            <section className="main">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </section>
            <div className="div-slider-button">
                <input type="radio" className="slider-button"></input>
                <input type="radio" className="slider-button"></input>
                <input type="radio" className="slider-button"></input>
            </div>
        </main>
    )
}