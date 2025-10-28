import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
  CContainer,
  CCard,
  CCardHeader,
  CCardBody,
  CSpinner,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CButton,
} from '@coreui/react';
import Button from '../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Listar = () => {
  const [doacoes, setDoacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (date) => date ? new Date(date).toLocaleDateString("pt-BR") : 'N/A';

  useEffect(() => {
    fetch(`${API_BASE_URL}donation`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar doações");
        return res.json();
      })
      .then((data) => setDoacoes(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <CContainer className="mt-4 text-center">
      <CSpinner color="primary" />
      <p>Carregando doações...</p>
    </CContainer>
  );

  if (error) return <p className="text-center mt-4 text-danger">{error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <CCard className="shadow-sm">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <h3 className="m-0" style={{ color: "var(--color-primary)" }}>Lista de Doações</h3>
          <Link to="/ajude-ja/doacoes/novo">
            <Button typeButton="primary">
              <i className="fa-solid fa-plus me-1" /> Criar Nova Doação
            </Button>
          </Link>
        </CCardHeader>
        <CCardBody>
          {doacoes.length === 0 ? (
            <p className="text-center">Nenhuma doação encontrada.</p>
          ) : (
            <CTable striped responsive bordered hover>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tipo</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Quantidade</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Doador</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Recebimento</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Expiração</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {doacoes.map((doacao) => (
                  <CTableRow key={doacao.id}>
                    <CTableDataCell>{doacao.name || `Doação ID: ${doacao.id}`}</CTableDataCell>
                    <CTableDataCell>{doacao.type || 'Não especificado'}</CTableDataCell>
                    <CTableDataCell>{doacao.quantity || 'N/A'}</CTableDataCell>
                    <CTableDataCell>{doacao.donor || 'Anônimo'}</CTableDataCell>
                    <CTableDataCell>{formatDate(doacao.receiverDate)}</CTableDataCell>
                    <CTableDataCell>{formatDate(doacao.expiryDate)}</CTableDataCell>
                    <CTableDataCell className="d-flex justify-content-center gap-2">
                      <Link to={`/ajude-ja/doacoes/editar/${doacao.id}`}>
                        <CButton color="info" className="text-white">
                          <i className="fa-solid fa-pen-to-square me-1"/> Editar
                        </CButton>
                      </Link>
                      <Link to={`/ajude-ja/doacoes/detalhes/${doacao.id}`}>
                        <CButton color="primary" className="text-white">
                          <i className="fa-solid fa-eye me-1"/> Detalhes
                        </CButton>
                      </Link>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          )}
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Listar;