import "./index.css";
import { useSelector } from "react-redux";
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

function App() {
  //recuperando os valores dos produtos com Redux
  const { produtos } = useSelector((rootReducer) => rootReducer.allProducts)
  const destaques = produtos.slice(0, 6);
  const lancamentos = produtos.slice(6, 12);
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
      <Paralax foto="http://source.unsplash.com/random/1400x850/?rosas" />
      <Void />
      <Siganos />
      <Void />
      <Footer />
    </>

  )
}

export default App
