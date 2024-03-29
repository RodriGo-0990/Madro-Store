import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react"
import Overlay from './components/overlay.jsx'
import Header from './components/header';
import Section from "./components/section";
import Paralax from "./components/paralaxsection";
import Void from "./components/void";
import Main from "./components/mainProducts";
import Newsletter from './components/newsletter';
import Siganos from './components/siganos';
import Footer from './components/footer';
import fundo from './assets/madro/voce_pode.jpg';
import loadProducts from "./api/api-bling";
import loadRoses from "./assets/loadRoses";

function App() {
  //recuperando os valores dos produtos com Redux
  const { produtos } = useSelector((rootReducer) => rootReducer.allProducts)
  const dispatch = useDispatch();
  useEffect(()=>{
    loadProducts(dispatch);
  },[] )
  const destaques = produtos.slice(0, (produtos.length /2));
  const lancamentos = produtos.slice((produtos.length /2), produtos.length);
  //===pega o estado do carrinho===//
  const { activeState } = useSelector(({ cartReducer }) => cartReducer);

  return (
    <>
      <Overlay isOpen={activeState} />
      <Header />
      <Section />
      <Main
        titulo="Destaque"
        produtos={destaques}
      />
      <Void />
      <Paralax foto={fundo} />
      <Main
        titulo="Lançamentos"
        produtos={lancamentos}
      />
      <Newsletter />
      <Void />
      <Paralax foto={loadRoses()} />
      <Void />
      <Siganos />
      <Void />
      <Footer />
    </>

  )
}

export default App
