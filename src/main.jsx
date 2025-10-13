import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Importar componentes
import ListarDoacoes from './views/Doacoes/Listar';
import NovaDoacao from './views/Doacoes/Nova';
import EditarDoacao from './views/Doacoes/Editar';
import DetalhesDoacao from './views/Doacoes/Detalhes';
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inicio" element={<App />} />
        <Route path="/doacoes" element={<ListarDoacoes />} />
        <Route path="/doacoes/nova" element={<NovaDoacao />} />
        <Route path="/doacoes/editar/:id" element={<EditarDoacao />} />
        <Route path="/doacoes/detalhes/:id" element={<DetalhesDoacao />} />
        <Route path="/relatorios/gerar" element={<GerarRelatorio />} />
        <Route path="/relatorios/exportar" element={<ExportarRelatorio />} />
        <Route path="/mensagens" element={<ListarMensagens />} />
        <Route path="/mensagens/nova" element={<NovaMensagem />} />
        <Route path="/mensagens/editar/:id" element={<EditarMensagem />} />
        <Route path="/mensagens/detalhes/:id" element={<DetalhesMensagem />} />
        <Route path="/usuarios" element={<ListarUsuarios />} />
        <Route path="/usuarios/novo" element={<NovoUsuario />} />
        <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />
        <Route path="/usuarios/detalhes/:id" element={<DetalhesUsuario />} />
      </Routes>
    </Router>
  </StrictMode>,
);