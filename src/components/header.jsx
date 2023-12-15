import "../css/header.css";
import user from "../assets/header/user.svg";
import cart from "../assets/header/bag.png";
import logoName from "../assets/header/logo.webp";
import menu from "../assets/header/icons8-menu-26.svg";
import search from "../assets/header/search.svg";
import searchinput from "../assets/header/icons8-search.svg"
import { Link } from 'react-router-dom'
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

                            <li className="item-menu">
                                <Link to="/Madro-Store">
                                    Home
                                </Link>

                            </li>
                            <li className="item-menu">
                                <Link to="/Madro-Store">
                                    Produtos
                                </Link>
                            </li>
                            <li className="item-menu">
                                <Link to="/Madro-Store/contatos" >
                                    Contatos
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* input de pesquisa */}
                    <div className="search-div">
                        <input className="search-input" type="search" placeholder="O que você está procurando?"></input>
                        <button className="input-search-button">
                            <img className="search-image-button" src={searchinput} />
                        </button>
                    </div>

                    {/* cadastro e carrinho */}
                    <div className="icons-log-cart-div">
                        <div className="icons-log-cart" >
                            <div className="label-log-cart">
                                <img className="img-log-cart" src={user} alt="login"></img>
                            </div>
                        </div>
                        <div className="icons-log-cart" >
                            <div className="label-log-cart">
                                <img className="img-log-cart" src={cart} alt="cart"></img>
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