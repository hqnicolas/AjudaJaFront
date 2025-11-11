import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import '@coreui/coreui/dist/css/coreui.min.css';
import { UserProvider } from './context/UserContext.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';

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
import NovoUsuario from './views/Usuarios/Novo/Novo.jsx';
import EditarUsuario from './views/Usuarios/Editar/Editar.jsx';
import DetalhesUsuario from './views/Usuarios/Detalhes/Detalhes.jsx';
import Login from './views/Login/Login.jsx';
import Home from './views/Home/Home.jsx';
import ListarDoacoes from './views/Doacoes/Listar.jsx';
import NovoDoacao from './views/Doacoes/Nova/Nova.jsx';
import DetalhesDoacao from './views/Doacoes/Detalhes/Detalhes.jsx';
import EditarDoacao from './views/Doacoes/Editar/Editar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<App />}>
            <Route index element={<Home />} />

            <Route path="campanhas" element={<ListarCampanhas />} />
            <Route path="campanhas/detalhes/:id" element={<DetalhesCampanha />} />

            <Route path="mensagens" element={<ListarMensagens />} />
            <Route path="mensagens/detalhes/:id" element={<DetalhesMensagem />} />

            <Route path="usuarios" element={<ListarUsuarios />} />
            <Route path="usuarios/detalhes/:id" element={<DetalhesUsuario />} />

            <Route path="doacoes" element={<ListarDoacoes />} />
            <Route path="doacoes/detalhes/:id" element={<DetalhesDoacao />} />

            <Route
              path="campanhas/doar/:id"
              element={
                <ProtectedRoute>
                  <NovaDoacao />
                </ProtectedRoute>
              }
            />
            <Route
              path="campanhas/editar/:id"
              element={
                <ProtectedRoute>
                  <EditarCampanhas />
                </ProtectedRoute>
              }
            />
            <Route
              path="relatorios/gerar"
              element={
                <ProtectedRoute>
                  <GerarRelatorio />
                </ProtectedRoute>
              }
            />
            <Route
              path="relatorios/exportar"
              element={
                <ProtectedRoute>
                  <ExportarRelatorio />
                </ProtectedRoute>
              }
            />

            <Route
              path="mensagens/nova"
              element={
                <ProtectedRoute>
                  <NovaMensagem />
                </ProtectedRoute>
              }
            />
            <Route
              path="mensagens/editar/:id"
              element={
                <ProtectedRoute>
                  <EditarMensagem />
                </ProtectedRoute>
              }
            />

            <Route
              path="usuarios/novo"
              element={
                <ProtectedRoute>
                  <NovoUsuario />
                </ProtectedRoute>
              }
            />
            <Route
              path="usuarios/editar/:id"
              element={
                <ProtectedRoute>
                  <EditarUsuario />
                </ProtectedRoute>
              }
            />

            <Route
              path="doacoes/novo"
              element={
                <ProtectedRoute>
                  <NovoDoacao />
                </ProtectedRoute>
              }
            />
            <Route
              path="doacoes/editar/:id"
              element={
                <ProtectedRoute>
                  <EditarDoacao />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  </StrictMode>
);