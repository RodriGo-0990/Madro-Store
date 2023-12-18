import Header from './components/header';
import Section from "./components/section";
import Paralax from "./components/paralaxsection";
import Void from "./components/void";
import Main from "./components/mainProducts";
import Produtos from './components/produtos';
import Newsletter from './components/newsletter';
import Siganos from './components/siganos';
import Footer from './components/footer';

import "./index.css";

//destaques images
import brincos2 from "./assets/produtos/brincos.webp"
import argolasmile from "./assets/produtos/argolasmile.webp"
import colarestrela from "./assets/produtos/colarestrela.webp"
import oculos from "./assets/produtos/oculos.webp"
import oculos2 from "./assets/produtos/oculos2.webp"
import pulseira from "./assets/produtos/pulseiracoracao.webp"


//lançamentos images
import brincos from "./assets/produtos/brincos.jpg"
import brincos1 from "./assets/produtos/brincos1.jpg"
import colar from "./assets/produtos/colar.png"
import colar2 from "./assets/produtos/colar2.png"
import colarcoracao from "./assets/produtos/colarcoracao.png"
import colarcoracao2 from "./assets/produtos/colarcoracao2.png"

function App() {
  const produtosDestaque = [
    <Produtos foto={brincos2} nome={"Brincos Argola Friz"} valor={29.90} />,
    <Produtos foto={argolasmile} nome={"Argola Smile"} valor={29.95} />,
    <Produtos foto={colarestrela} nome={"Colar Estrela"} valor={28.90} />,
    <Produtos foto={oculos} nome={"Óculos cat"} valor={109.90} />,
    <Produtos foto={oculos2} nome={"Óculos Pink"} valor={109.90} />,
    <Produtos foto={pulseira} nome={"Pulseira Coração"} valor={26.90} />]
    const produtosLancamento= [
    <Produtos foto={brincos} nome={"Brincos dourados"} valor={23.90} />,
    <Produtos foto={brincos1} nome={"Brincos perolas"} valor={28.75} />,
    <Produtos foto={colar} nome={"Pingente prata"} valor={28.90} />,
    <Produtos foto={colar2} nome={"Correntinha de pedra roxa"} valor={33.90} />,
    <Produtos foto={colarcoracao} nome={"Coração de prata"} valor={34.90} />,
    <Produtos foto={colarcoracao2} nome={"S2 Amor para sempre S2"} valor={44.90} />,]

  return (
    <><Header />
      <Section />
      <Main
        titulo = "Destaque"
        produtos = {produtosDestaque}
          />
      <Void />
      <Paralax foto = "http://source.unsplash.com/random/1400x850/?gift" />
      <Main
        titulo = "Lançamentos"
        produtos = {produtosLancamento}
        />
      <Newsletter/>
      <Void />
      <Paralax foto = "http://source.unsplash.com/random/1400x850/?pink-gift" />
      <Void />
      <Siganos/>
      <Void />
      <Footer />
    </>

  )
}

export default App
