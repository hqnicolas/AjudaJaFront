import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';


import ListarCampanhas from './views/Campanhas/ListarCampanhas.jsx';
import NovaDoacao from './views/Campanhas/Nova/Nova.jsx';
import EditarDoacao from './views/Campanhas/Editar/EditarCampanhas.jsx';
import DetalhesDoacao from './views/Campanhas/Detalhes/Detalhes.jsx';
import GerarRelatorio from './views/Relatorios/Gerar';
import ExportarRelatorio from './views/Relatorios/Exportar';
import ListarMensagens from './views/Mensagens/Listar';
import NovaMensagem from './views/Mensagens/Nova';
import EditarMensagem from './views/Mensagens/Editar';
import DetalhesMensagem from './views/Mensagens/Detalhes';
import ListarUsuarios from './views/Usuarios/Listar';
import NovoUsuario from './views/Usuarios/Novo';
import EditarUsuario from './views/Usuarios/Editar';
import DetalhesUsuario from './views/Usuarios/Detalhes';
import Login from './views/Login/Login.jsx';
import Home from './views/Home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/ajude-ja" element={<App />}>

          <Route path="/ajude-ja/inicio" element={<Home />} />

          <Route path="/ajude-ja/campanhas" element={<ListarCampanhas />} >
            <Route path="/ajude-ja/campanhas/nova" element={<NovaDoacao />} />
            <Route path="/ajude-ja/campanhas/editar/:id" element={<EditarDoacao />} />
            <Route path="/ajude-ja/campanhas/detalhes/:id" element={<DetalhesDoacao />} />
          </Route>
          <Route path="/ajude-ja/relatorios/gerar" element={<GerarRelatorio />} />
          <Route path="/ajude-ja/relatorios/exportar" element={<ExportarRelatorio />} />

          <Route path="/ajude-ja/mensagens" element={<ListarMensagens />} />
          <Route path="/ajude-ja/mensagens/nova" element={<NovaMensagem />} />
          <Route path="/ajude-ja/mensagens/editar/:id" element={<EditarMensagem />} />
          <Route path="/ajude-ja/mensagens/detalhes/:id" element={<DetalhesMensagem />} />

          <Route path="/ajude-ja/usuarios" element={<ListarUsuarios />} />
          <Route path="/ajude-ja/usuarios/novo" element={<NovoUsuario />} />
          <Route path="/ajude-ja/usuarios/editar/:id" element={<EditarUsuario />} />
          <Route path="/ajude-ja/usuarios/detalhes/:id" element={<DetalhesUsuario />} />
        </Route>


        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  </StrictMode>,
);