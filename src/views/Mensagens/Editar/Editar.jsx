import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    CCard,
    CCardHeader,
    CCardBody,
    CForm,
    CFormLabel,
    CFormInput,
    CFormTextarea,
    CButton,
    CSpinner,
    CAlert

} from '@coreui/react';
import { Container } from './Editar.styles'; 

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const MensagemForm = ({ mensagem, onChange }) => {
    return (

        <>
            <div>
                <CFormLabel htmlFor="remetenteId">Remetente ID</CFormLabel>
                <CFormInput
                    type="number"
                    id="remetenteId"
                    name="remetenteId"
                    value={mensagem.remetenteId || ''}
                    onChange={onChange}
                    required
                />
            </div>
            
 
            <div>
                <CFormLabel htmlFor="dataEnvio">Data de Envio</CFormLabel>
                <CFormInput
                    type="datetime-local"
                    id="dataEnvio"
                    name="dataEnvio"
                   
                    value={mensagem.dataEnvio?.slice(0, 16) || ''}
                    onChange={onChange}
                    required
                />
            </div>
            
          
            <div> 
                <CFormLabel htmlFor="conteudo">Conteúdo</CFormLabel>
                <CFormTextarea
                    id="conteudo"
                    name="conteudo"
                    value={mensagem.conteudo || ''}
                    onChange={onChange}
                    rows={4}
                    required
                />
            </div>
        </>
    );
};

const Editar = () => {
    const [mensagem, setMensagem] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const url = `${API_BASE_URL}api/mensagens/${id}`;

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Mensagem não encontrada');
                return res.json();
            })
            .then(data => {
                setMensagem(data);
                setError(null);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [url]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMensagem(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mensagem),
        })
            .then(res => {
                if (!res.ok) throw new Error('Falha ao atualizar mensagem');
                return res.json();
            })
            .then(data => {
                setMensagem(data);
                setMessage('Mensagem atualizada com sucesso!');
                setError(null);
                setTimeout(() => setMessage(null), 3000); 
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    };

    const handleDelete = () => {
        if (!window.confirm('Tem certeza que deseja excluir esta mensagem?')) return;
        setLoading(true);
        fetch(url, { method: 'DELETE' })
            .then(res => {
                if (res.status === 204) {
                    setMessage('Mensagem excluída com sucesso!');
                    setMensagem({});
                    setTimeout(() => navigate("/ajude-ja/mensagens"), 2000);
                } else if (res.status === 404) {
                    setError('Mensagem não encontrada');
                } else {
                    throw new Error('Falha ao excluir mensagem');
                }
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    };

    return (
    
        <Container>
            <CCard className="shadow-sm w-100">
                <CCardHeader>
                    <h3 className="m-0" style={{ color: "var(--color-primary)" }}>
                        Editar Mensagem
                    </h3>
                </CCardHeader>

                <CCardBody>
                    {loading && Object.keys(mensagem).length === 0 && (
                        <div className="text-center my-3">
                            <CSpinner color="primary" />
                            <p>Carregando...</p>
                        </div>
                    )}

                    {error && <CAlert color="danger">{error}</CAlert>}
                    {message && <CAlert color="success">{message}</CAlert>}

                    {!loading && mensagem && Object.keys(mensagem).length > 0 && (
                        <CForm onSubmit={handleSubmit} className="grid-form">
               
                            <MensagemForm mensagem={mensagem} onChange={handleChange} />
                            
                    
                            <div className="form-actions">
                                <div className="d-flex gap-3">
                                    <CButton color="primary" type="submit" disabled={loading}>
                                        {loading ? <CSpinner size="sm" /> : 
                                            <>
                                                <i className="fa-solid fa-floppy-disk me-1" /> Salvar Alterações
                                            </>
                                        }
                                    </CButton>
                                    <CButton color="danger" onClick={handleDelete} disabled={loading}>
                                        <i className="fa-solid fa-trash-can me-1" /> Excluir Mensagem
                                    </CButton>
                                </div>
                                
                               
                                <div className="d-flex gap-3">
                                    <Link to={`/ajude-ja/mensagens/detalhes/${id}`} className="btn btn-secondary">
                                        <i className="fa-solid fa-eye me-1" /> Ver Detalhes
                                    </Link>
                                </div>
                            </div>
                        </CForm>
                    )}
                </CCardBody>
            </CCard>
        </Container>
    );
};

export default Editar;