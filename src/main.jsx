import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import '@coreui/coreui/dist/css/coreui.min.css';

import ListarCampanhas from './views/Campanhas/ListarCampanhas.jsx';
import NovaDoacao from './views/Campanhas/Nova/Nova.jsx';
import EditarCampanhas from './views/Campanhas/Editar/EditarCampanhas.jsx';
import DetalhesCampanha from './views/Campanhas/Detalhes/Detalhes.jsx';
import GerarRelatorio from './views/Relatorios/Gerar/Gerar.jsx';
import ExportarRelatorio from './views/Relatorios/Exportar/Exportar.jsx';
import ListarMensagens from './views/Mensagens/Listar';
import NovaMensagem from './views/Mensagens/Nova/Nova.jsx';
import EditarMensagem from './views/Mensagens/Editar/Editar.jsx';
import DetalhesMensagem from './views/Mensagens/Detalhes/Detalhes.jsx';
import ListarUsuarios from './views/Usuarios/Listar';

import EditarUsuario from './views/Usuarios/Editar/Editar.jsx';
import DetalhesUsuario from './views/Usuarios/Detalhes/Detalhes.jsx';
import Login from './views/Login/Login.jsx';
import Home from './views/Home/Home.jsx';
import ListarDoacoes from './views/Doacoes/Listar.jsx';
import NovoDoacao from './views/Doacoes/Novo.jsx';
import DetalhesDoacao from './views/Doacoes/Detalhes';
import EditarDoacao from './views/Doacoes/Editar';
import NovoUsuario from './views/Usuarios/Novo/Novo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />


        <Route path="/ajude-ja" element={<App />}>

          <Route path="inicio" element={<Home />} />


          <Route path="campanhas" element={<ListarCampanhas />} />
          <Route path="campanhas/doar/:id" element={<NovaDoacao />} />
          <Route path="campanhas/editar/:id" element={<EditarCampanhas />} />
          <Route path="campanhas/detalhes/:id" element={<DetalhesCampanha />} />


          <Route path="relatorios/gerar" element={<GerarRelatorio />} />
          <Route path="relatorios/exportar" element={<ExportarRelatorio />} />

          <Route path="mensagens" element={<ListarMensagens />} />
          <Route path="mensagens/nova" element={<NovaMensagem />} />
          <Route path="mensagens/editar/:id" element={<EditarMensagem />} />
          <Route path="mensagens/detalhes/:id" element={<DetalhesMensagem />} />


          <Route path="usuarios" element={<ListarUsuarios />} />
          <Route path="usuarios/novo" element={<NovoUsuario />} />
          <Route path="usuarios/editar/:id" element={<EditarUsuario />} />
          <Route path="usuarios/detalhes/:id" element={<DetalhesUsuario />} />


          <Route path="doacoes" element={<ListarDoacoes />} />
          <Route path="doacoes/novo" element={<NovoDoacao />} />
          <Route path="doacoes/editar/:id" element={<EditarDoacao />} />
          <Route path="doacoes/detalhes/:id" element={<DetalhesDoacao />} />

        </Route>
      </Routes>

    </Router>
  </StrictMode>
);