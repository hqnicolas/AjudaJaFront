import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
  CSpinner,
  CButton,
} from '@coreui/react';
import Button from "../../components/Button/Button";
import { ListaContainer, ItemMensagem, Container } from "./Listar.styles";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Listar = () => {
  const [mensagens, setMensagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}api/mensagens`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar mensagens");
        return res.json();
      })
      .then((data) => {
        setMensagens(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <CContainer className="mt-4 text-center">
        <CSpinner color="primary" />
        <p>Carregando mensagens...</p>
      </CContainer>
    );

  if (error)
    return <p className="text-center mt-4 text-danger">{error}</p>;

  return (
    <Container>
    
      <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="m-0" style={{ color: "var(--color-primary)" }}>
            Lista de Mensagens
          </h3>
          <Link to="/mensagens/nova">
            <Button typeButton="primary">
              <i className="fa-solid fa-plus me-1 mt-1" /> Criar Nova Mensagem
            </Button>
          </Link>
        </div>
        <CCard>
        <CCardBody>
          {mensagens.length === 0 ? (
            <p className="text-center">Nenhuma mensagem encontrada.</p>
          ) : (
            <ListaContainer>
              {mensagens.map((msg, index) => (
                <ItemMensagem key={index}>
                  <div className="conteudo">
                    <span>
                      {msg.conteudo.length > 120
                        ? `${msg.conteudo.substring(0, 120)}...`
                        : msg.conteudo}
                    </span>
                    <div className="data mt-2">
                      Enviada em: {new Date(msg.dataEnvio).toLocaleString("pt-BR")}
                    </div>
                  </div>

                  <div className="acoes">
                    <Link to={`/mensagens/editar/${index + 1}`}>
                      <CButton color="info" className="text-dark" variant="ghost">
                        <i className="fa-solid fa-pen-to-square me-1" /> Editar
                      </CButton>
                    </Link>
                    <Link to={`/mensagens/detalhes/${index + 1}`}>
                      <CButton color="primary" className="text-dark" variant="ghost">
                        <i className="fa-solid fa-eye me-1" /> Detalhes
                      </CButton>
                    </Link>
                  </div>
                </ItemMensagem>
              ))}
            </ListaContainer>
          )}
        </CCardBody>
   </CCard>
    </Container>
  );
};

export default Listar;