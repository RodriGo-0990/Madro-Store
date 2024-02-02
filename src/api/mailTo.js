export default function sendMailTo(values) {

    const backendEndpoint = 'https://expressjs-madro.up.railway.app/mailTo';
   //local
   //const backendEndpoint = 'http://localhost:3333/mailTo';
   return new Promise((resolve, reject) => {
       fetch(backendEndpoint, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(values),
       })
           .then((response) => response.json())
           .then((data) => {
               resolve(data)
           }
           )
           .catch((e) => {
               reject(e);
           })
   }
   )
}