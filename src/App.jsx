import Header from './components/header';
import Section from "./components/section";
import Paralax from "./components/paralaxsection";
import Void from "./components/void";
import Main from "./components/mainProducts";
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

  return (
    <><Header />
      <Section />
      <Main
        titulo="Destaques"
        fotos={[brincos2, argolasmile, colarestrela, oculos, oculos2 , pulseira]}
        valores={[29.90, 29.95, 28.90, 109.90, 109.90, 26.90]}
        nomes={['Brincos Argola Friz', 'Argola Smile', 'Colar Estrela ',
          'Óculos cat', 'Óculos Pink', "Pulseira Coração "]}
          />
      <Void />
      <Paralax foto = "http://source.unsplash.com/random/1400x850/?gift" />
      <Main
        titulo="Lançamentos"
        fotos={[brincos, brincos1, colar, colar2, colarcoracao, colarcoracao2]}
        valores={[23.90, 28.75, 28.90, 33.90, 34.90, 44.90]}
        nomes={['Brincos dourados','Brincos perolas','Pingente prata','Correntinha de pedra roxa', 'Coração de prata', "S2 Amor para sempre S2"]}
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
