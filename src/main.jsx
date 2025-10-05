import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Importar componentes
import ListarDoacoes from './Doacoes/Listar.jsx';
import NovaDoacao from './Doacoes/Nova.jsx';
import EditarDoacao from './Doacoes/Editar.jsx';
import DetalhesDoacao from './Doacoes/Detalhes.jsx';
import GerarRelatorio from './Relatorios/Gerar.jsx';
import ExportarRelatorio from './Relatorios/Exportar.jsx';
import ListarMensagens from './Mensagens/Listar.jsx';
import NovaMensagem from './Mensagens/Nova.jsx';
import EditarMensagem from './Mensagens/Editar.jsx';
import DetalhesMensagem from './Mensagens/Detalhes.jsx';
import ListarUsuarios from './Usuarios/Listar.jsx';
import NovoUsuario from './Usuarios/Novo.jsx';
import EditarUsuario from './Usuarios/Editar.jsx';
import DetalhesUsuario from './Usuarios/Detalhes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
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