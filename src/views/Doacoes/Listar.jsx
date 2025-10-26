import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
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
import Button from '../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DoacaoCard = ({ doacao }) => {
    const dataRecebimento = doacao.receiverDate ? new Date(doacao.receiverDate).toLocaleDateString("pt-BR") : 'N/A';
    const dataExpiracao = doacao.expiryDate ? new Date(doacao.expiryDate).toLocaleDateString("pt-BR") : 'N/A';

    return (
        <CCol xs={12} md={6} lg={4}> 
            <CCard className="h-100 shadow-sm">
                <CCardBody>
               
                    <CCardTitle className="mb-3" style={{ color: "var(--color-primary)" }}>
                        {doacao.name || `Doação ID: ${doacao.id}`}
                    </CCardTitle>
              
                    <CCardText>
                        <strong className="d-block mb-1">Tipo:</strong> {doacao.type || 'Não especificado'}
                    </CCardText>
                    <CCardText>
                        <strong className="d-block mb-1">Quantidade:</strong> {doacao.quantity || 'N/A'}
                    </CCardText>
                    <CCardText>
                        <strong className="d-block mb-1">Doador:</strong> {doacao.donor || 'Anônimo'}
                    </CCardText>
                
                    <p className="text-medium-emphasis mb-4">
                        <small>
                            <strong>Recebimento:</strong> {dataRecebimento}
                        </small>
                        <br />
                        <small>
                            <strong>Expiração:</strong> {dataExpiracao}
                        </small>
                    </p>

                    <div className="d-flex gap-2 justify-content-center">
                        <Link to={`/ajude-ja/doacoes/editar/${doacao.id}`}>
                            <CButton color="info" className="text-white"> 
                                <i className="fa-solid fa-pen-to-square me-1"/> Editar
                            </CButton>
                        </Link>
                        <Link to={`/ajude-ja/doacoes/detalhes/${doacao.id}`}>
                        
                            <CButton color="primary" className="text-white"> 
                                <i className="fa-solid fa-eye me-1" /> Detalhes
                            </CButton>
                        </Link>
                    </div>
                </CCardBody>
            </CCard>
        </CCol>
    );
};


const Listar = () => {
    const [doacoes, setDoacoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}donation`)
            .then((res) => {
                if (!res.ok) throw new Error("Erro ao buscar doações");
                return res.json();
            })
            .then((data) => {
               
                setDoacoes(data); 
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
                <p>Carregando doações...</p>
            </CContainer>
        );

    if (error)
        return <p className="text-center mt-4 text-danger">{error}</p>;

    return (
        <CContainer className="py-4">
            <CCard className="shadow-sm">

                <CCardHeader className="d-flex justify-content-between align-items-center">
                    <h3 className="m-0" style={{ color: "var(--color-primary)" }}>
                        Lista de Doações
                    </h3>
                   
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
                      
                        <CRow className="g-3"> 
                            {doacoes.map((doacao) => (
                                <DoacaoCard key={doacao.id} doacao={doacao} />
                            ))}
                        </CRow>
                    )}
                </CCardBody>
            </CCard>
        </CContainer>
    );
};

export default Listar;