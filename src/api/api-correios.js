import cartActionTypes from "../Redux/cart/actiontype";

export default function calculateFrete(dispatch,cep) {
  

  const options = {
    method: 'POST',
    headers: {
      origin: "*",
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTBlMGYxMDc1MGMyMTM3NzUwMzhlNTBjYjgyMzRjNDAyMmQ2N2M5OWY5YTgxOTJjNmQ2OWRhMzMzNGRjYWFjZWU1NGExNTU1ZmRkYmRkM2MiLCJpYXQiOjE3MDQwNDcyNjMuMzIyNzYxLCJuYmYiOjE3MDQwNDcyNjMuMzIyNzYzLCJleHAiOjE3MzU2Njk2NjMuMzEwMjE1LCJzdWIiOiI5YWZiMzY2Ny1hNTMyLTQ3ODItOWJhYy02MzdhZDQyZWQzMTUiLCJzY29wZXMiOlsic2hpcHBpbmctdHJhY2tpbmciLCJzaGlwcGluZy1jYWxjdWxhdGUiXX0.CBHL_CeSp6Lios8y-Ip_9VdBrOARtJwdmaJlaoCxj-Do_zGGuCUbOkqb7yjGI7QIU4C7N5JBxTgHgBJ3SdZTWukTPE8M0rPNKMNp1eQhJmX1m5-TcpJMqKIqLFJnwxtjqYd_xILNJA_ZobpIBauhO2U1c84nTQADOLCLy_wNJ9RdWsZBB-MmNSsbRaWgFLNusvsnzf0njXDoMR0kJDyrpVAFDIUx_JLGzWvKm9QLKp2qlY1BPxH2nnhCwRCiCI9kcrCb7YpBzm7848Pvxm_BXecJa90dBb_wVazqhcG2IuB5KQfVUO2gkWIENHYMIfU5tcWW_cQFJW24cBoxmWrRDZaQQoXH3Zt2IUVeIsOdps92pbBH28Z4MGJAxDmGIo2wm5MlEZHaMn9n0ibyl3Niq8QZsM1wISh8_hjMKwO0c8ziRwe1z953qX8p1LY_5IG9C2sy1ZuUy1-nLdR0DVSrf4fNddRuJCynaCeaX12JA-RcgQwLALJ2xUo7ivm5sH83j2kKOE0gaxQMumDNw-NqZyJZb4pFrFJ9kO-GnRKRu-UaR8vaN0h7-LQbwvNvKR3VY0LOBDN5Zge2epUAuoFc_4WFm7ko_8F_Gf5kmP9-P2nvGxVQLQmsdIUHZXOHvcH864Bo19etz6vK61IJJX-paiPp-ZHFiOh55c3DbFeaif4',
      'User-Agent': 'Aplicação rodrigorodrigues0990@hotmail.com',
    },
    body: JSON.stringify({
      from: { postal_code: '88052-600' },
      to: { postal_code: cep },
      products: [
        {
          id: 'x',
          width: 11,
          height: 17,
          length: 11,
          weight: 0.3,
          insurance_value: 29.90,
          quantity: 1
        },
      ],
      services: "28,29"
    })
  };

  const backendEndpoint = 'https://expressjs-madro.up.railway.app/api/frete';

  return new Promise((resolve, reject) => {
    fetch(backendEndpoint, options)
      .then((response) => response.json())
      .then((data) => {
        resolve(data); 
        dispatch({
          type: cartActionTypes.FRETE,
          payload: { data }
        });
      })
      .catch((err) => {
        reject(err); 
      });
  });
    
}

