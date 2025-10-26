import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CSpinner,
  CCard,
  CCardBody,
  CCardHeader
} from '@coreui/react';
import Button from "../../components/Button/Button";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}users`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar usuários");
        return res.json();
      })
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (id) => navigate(`/ajude-ja/usuarios/detalhes/${id}`);
  const handleEdit = (id) => navigate(`/ajude-ja/usuarios/editar/${id}`);

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <CSpinner color="primary" />
        <p>Carregando usuários...</p>
      </div>
    );

  if (error)
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <CCard className="shadow-sm">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <h3 className="m-0" style={{ color: "var(--color-primary)" }}>Lista de Usuários</h3>
          <Link to="/ajude-ja/usuarios/novo">
            <Button typeButton="primary">+ Criar Novo Usuário</Button>
          </Link>
        </CCardHeader>

        <CCardBody>
          {usuarios.length === 0 ? (
            <p className="text-center">Nenhum usuário encontrado.</p>
          ) : (
            <CTable striped responsive bordered hover>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">Foto</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Localização</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Interesses</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {usuarios.map((user) => (
                  <CTableRow key={user.id}>
                    <CTableDataCell>
                      <img
                        src={user.photos}
                        alt={user.name}
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          objectFit: "cover"
                        }}
                      />
                    </CTableDataCell>
                    <CTableDataCell>{user.name}</CTableDataCell>
                    <CTableDataCell>{user.email}</CTableDataCell>
                    <CTableDataCell>{user.location}</CTableDataCell>
                    <CTableDataCell>{user.interests}</CTableDataCell>
                    <CTableDataCell>
                <CTableDataCell className="d-flex">
                      <div className="d-flex justify-content-center gap-3 w-100">
                        <CButton
                          className="text-white bg-info w-75"
                          onClick={() => handleEdit(user.id)}
                        >
                      <i className="fa-solid fa-pen-to-square me-1"/>    Editar
                        </CButton>
                        <CButton
                          className="text-white bg-primary w-75"
                          onClick={() => handleViewDetails(user.id)}
                        >
                           <i className="fa-solid fa-eye me-1" /> Detalhes
                        </CButton>
                      </div>
                    </CTableDataCell>
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

export default ListarUsuarios;
