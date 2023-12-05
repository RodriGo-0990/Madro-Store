import "../css/header.css";
import user from "../assets/header/user.svg";
import cart from "../assets/header/cart.svg";
import logoName from "../assets/header/logo.webp";

export default function header() {
    return (
        <>
            <header className="header">
                <div className="center" >
                    <div className="logo">
                        <img src={logoName} alt="logo"></img>
                    </div>
                    <nav className="menu">
                        <ul className="menu-list">
                            <li className="item-menu">Home</li>
                            <li className="item-menu">Produtos</li>
                            <li className="item-menu">Contatos</li>
                        </ul>
                    </nav>
                    <div className="search-div">
                        <input className="search-input" type="search" placeholder="  O que você está procurando?"></input>
                    </div>
                    <div className="icons-log-cart" >
                        <div className="label-log-cart">
                            <img className="img-log-cart" src={user} alt="login"></img>
                            <p className="label" id="user">Cadastre-se</p>
                        </div>
                        <div className="label-log-cart">
                            <img className="img-log-cart" src={cart} alt="cart"></img>
                            <p className="label" id="cart-user">Meu Carrinho</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}