import actionTypes from "../Redux/allproducts/actiontype";
import returnProducts from "../teste";

export default function loadProducts(dispatch) {
  
  /* INTEGRAÇÃO COM A PLATAFORMA BLING:
  * Essa integração foi feita em uma conta de testes do Bling.
  * O periodo de testes expirou, e não foi renovado para um plano pago.
  * Os produtos serão gravados internamente para fins de teste da aplicação.
  */

  // const backendEndpoint = 
  // 'https://expressjs-madro.up.railway.app/api/bling';
  // //local
  // // 'http://localhost:3001/api/bling'
  // fetch(backendEndpoint)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     dispatch({
  //       type: actionTypes.GETALL,
  //       payload: { data }
  //     })
  //   })

  //PRODUTOS DE TESTE
  dispatch({
    type: actionTypes.GETALL,
    payload: returnProducts()
  })
}