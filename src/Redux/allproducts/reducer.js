//destaques images
import brincos2 from "../../assets/produtos/brincos/brincos.webp"
import argolasmile from "../../assets/produtos/brincos/argolasmile.webp"
import colarestrela from "../../assets/produtos/colar/colarestrela.webp"
import oculos from "../../assets/produtos//oculos/oculos.webp"
import oculos2 from "../../assets/produtos/oculos/oculos2.webp"
import pulseira from "../../assets/produtos/pulseira/pulseiracoracao.webp"


//lançamentos images
import brincos from "../../assets/produtos/brincos/brincos.jpg"
import brincos1 from "../../assets/produtos/brincos/brincos1.jpg"
import colar from "../../assets/produtos//colar/colar.png"
import colar2 from "../../assets/produtos/colar/colar2.png"
import colarcoracao from "../../assets/produtos/colar/colarcoracao.png"
import colarcoracao2 from "../../assets/produtos/colar/colarcoracao2.png"

const initialState = {
    produtos: [
         {foto:brincos2, nome:"Brincos Argola Friz", valor:29.90, categoria :"Brincos"},
         {foto:argolasmile, nome:"Argola Smile", valor:29.95, categoria :"Brincos"},
         {foto:colarestrela, nome:"Colar Estrela", valor:28.90, categoria :"Colares"},
         {foto:oculos, nome:"Óculos cat", valor:109.90, categoria :"Óculos"},
         {foto:oculos2, nome:"Óculos Pink", valor:109.90, categoria :"Óculos"},
         {foto:pulseira, nome:"Pulseira Coração", valor:26.90, categoria :"Pulseiras"},
         {foto:brincos, nome:"Brincos dourados", valor:23.90, categoria :"Brincos"},
         {foto:brincos1, nome:"Brincos perolas", valor:28.75, categoria :"Brincos"},
         {foto:colar, nome:"Pingente prata", valor:28.90, categoria :"Colares"},
         {foto:colar2, nome:"Correntinha de pedra roxa", valor:33.90, categoria :"Colares"},
         {foto:colarcoracao, nome:"Coração de prata", valor:34.90, categoria :"Colares"},
         {foto:colarcoracao2, nome:"S2 Amor para sempre S2", valor:44.90, categoria :"Colares"}]
};

const allProductReducer = (state=initialState, action)=>{

    return state;
}
export default allProductReducer;