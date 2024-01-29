import actionTypes from "../Redux/allproducts/actiontype";

export default function loadProducts(dispatch) {
  const backendEndpoint = 
  'https://expressjs-madro.up.railway.app/api/bling';
  //local
  // 'http://localhost:3001/api/bling'
  fetch(backendEndpoint)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: actionTypes.GETALL,
        payload: { data }
      })
    })
}