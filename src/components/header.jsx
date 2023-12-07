import "../css/header.css";
import user from "../assets/header/user.svg";
import cart from "../assets/header/cart.svg";
import logoName from "../assets/header/logo.webp";
import menu from "../assets/header/icons8-menu-26.svg";
import search from "../assets/header/search.svg";

export default function header() {
    return (
        <>
            <header className="header">
                <div className="center" >
                    {/* logomarca */}
                    <div className="logo">
                        <a>
                        <img src={logoName} alt="logo"></img>
                        </a>
                    </div>

                    {/* menu */}
                    <nav className="menu">
                        <ul className="menu-list">
                            <li className="item-menu">Home</li>
                            <li className="item-menu">Produtos</li>
                            <li className="item-menu">Contatos</li>
                        </ul>
                    </nav>

                    {/* input de pesquisa */}
                    <div className="search-div">
                        <input className="search-input" type="search" placeholder="  O que você está procurando?"></input>
                    </div>

                    {/* cadastro e carrinho */}
                    <div className="icons-log-cart-div">
                        <div className="icons-log-cart" >
                            <div className="label-log-cart">
                                <img className="img-log-cart" src={user} alt="login"></img>
                                <p className="label" id="user">Cadastre-se</p>
                            </div>
                        </div>
                        <div className="icons-log-cart" >
                            <div className="label-log-cart">
                                <img className="img-log-cart" src={cart} alt="cart"></img>
                                <p className="label" id="cart-user">Meu Carrinho</p>
                            </div>
                        </div>
                    </div>

                    {/* icones mobile */}
                    <div className="icons-search-menu-mobile">
                        <div className="search-div-mobile">
                            <img className="search-mobile" src={search}></img>
                        </div>
                        <div className="menu-div-mobile">
                            <img className="menu-mobile" src={menu}></img>
                        </div>
                    </div>
                </div>
                {/* icones mobile */}
            </header >
        </>
    )
}