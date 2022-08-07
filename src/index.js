import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video'
import Home from './pages/Home'
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/cadastro/video' element={<CadastroVideo/>}/>
          <Route path='/cadastro/categoria' element={<CadastroCategoria/>}/>
       </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
