import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contatos from './pages/contatos.jsx'
import Cadastro from './pages/register/cadastro.jsx'
import Login from './pages/register/login.jsx'
import Produtos from './pages/paginaprodutos.jsx'
import './index.css'

//****Router */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//********** */

//**** Swiper **** */
import {register} from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//************ */


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/Madro-Store' element={<App/>} />
      <Route path='/Madro-Store/contatos' element={<Contatos />}/>
      <Route path='/Madro-Store/cadastro' element={<Cadastro />}/>
      <Route path='/Madro-Store/login' element={<Login />}/>
      <Route path='/Madro-Store/produtos' element={<Produtos />}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
