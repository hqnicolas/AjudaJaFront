import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    CCard,
    CCardHeader,
    CCardBody,
    CForm,
    CFormLabel,
    CFormInput,
    CFormSelect,
    CFormTextarea,
    CButton,
    CSpinner,
    CAlert,
    CInputGroup,      
    CInputGroupText,  
} from '@coreui/react';
import { Container } from './Editar.styles'; 

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function EditarUsuario() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const url = `${API_BASE_URL}users/${id}`;

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Falha ao buscar usuário');
                return res.json();
            })
            .then(data => {
                if (data.dateOfBirth) {
                    data.dateOfBirth = data.dateOfBirth.slice(0, 10);
                }
                setUser(data);
                setError(null);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [url]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then(res => {
                if (!res.ok) throw new Error('Falha ao atualizar usuário');
                return res.json();
            })
            .then(() => {
                setMessage('Usuário atualizado com sucesso!');
                setError(null);
                setTimeout(() => navigate('/usuarios'), 2000);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    };

    const handleDelete = () => {
        if (!window.confirm('Tem certeza que deseja excluir este usuário?')) return;
        setLoading(true);
        fetch(url, { method: 'DELETE' })
            .then(res => {
                if (res.status === 204) {
                    setMessage('Usuário excluído com sucesso!');
                    setTimeout(() => navigate('/usuarios'), 2000);
                } else if (res.status === 404) {
                    setError('Usuário não encontrado');
                } else {
                    throw new Error('Falha ao excluir usuário');
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
                        Editar Usuário
                    </h3>
                </CCardHeader>

                <CCardBody>
                    {loading && (
                        <div className="text-center my-3">
                            <CSpinner color="primary" />
                            <p>Carregando...</p>
                        </div>
                    )}

                    {error && <CAlert color="danger">{error}</CAlert>}
                    {message && <CAlert color="success">{message}</CAlert>}

                    {!loading && user && Object.keys(user).length > 0 && (
                        <CForm onSubmit={handleSubmit} className="grid-form">
                            <div>
                                <CFormLabel>Nome</CFormLabel>
                                <CInputGroup>
                                    <CInputGroupText>
                                        <i className="fa-solid fa-user" />
                                    </CInputGroupText>
                                    <CFormInput
                                        type="text"
                                        name="name"
                                        value={user.name || ''}
                                        onChange={handleChange}
                                        required
                                    />
                                </CInputGroup>
                            </div>
                            <div>
                                <CFormLabel>Email</CFormLabel>
                                <CInputGroup>
                                    <CInputGroupText>
                                        <i className="fa-solid fa-envelope" />
                                    </CInputGroupText>
                                    <CFormInput
                                        type="email"
                                        name="email"
                                        value={user.email || ''}
                                        onChange={handleChange}
                                        required
                                    />
                                </CInputGroup>
                            </div>
                            <div>
                                <CFormLabel>Senha</CFormLabel>
                                <CInputGroup>
                                    <CInputGroupText>
                                        <i className="fa-solid fa-lock" />
                                    </CInputGroupText>
                                    <CFormInput
                                        type="password"
                                        name="password"
                                        value={user.password || ''}
                                        onChange={handleChange}
                                        placeholder="Preencha apenas se quiser alterar"
                                    />
                                </CInputGroup>
                            </div>
                            <div>
                                <CFormLabel>Data de Nascimento</CFormLabel>
                                <CFormInput
                                    type="date"
                                    name="dateOfBirth"
                                    value={user.dateOfBirth || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <CFormLabel>Gênero</CFormLabel>
                                <CFormSelect
                                    name="gender"
                                    value={user.gender || ''}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecione</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Outro">Outro</option>
                                </CFormSelect>
                            </div>
                            <div>
                                <CFormLabel>Localização</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name="location"
                                    value={user.location || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <CFormLabel>Preferências</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name="preferences"
                                    value={user.preferences || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <CFormLabel>Interesses</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name="interests"
                                    value={user.interests || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <CFormLabel>Biografia</CFormLabel>
                                <CFormTextarea
                                    name="biography"
                                    value={user.biography || ''}
                                    onChange={handleChange}
                                    rows={3}
                                />
                            </div>
       
                            <div style={{ gridColumn: '1 / -1' }}>
                                <CFormLabel>Fotos (URL)</CFormLabel>
                                <CFormInput
                                    type="url"
                                    name="photos"
                                    value={user.photos || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div style={{ gridColumn: '1 / -1' }} className="d-flex justify-content-between mt-3">
                                <div className="d-flex gap-3">
                                    <CButton color="primary" type="submit" disabled={loading}>
                                        {loading ?
                                            <CSpinner size="sm" />
                                            :
                                            <>
                                                <i className="fa-solid fa-floppy-disk me-1" /> Salvar Alterações
                                            </>
                                        }
                                    </CButton>
                                    <CButton color="danger" onClick={handleDelete} disabled={loading}>
                                        <i className="fa-solid fa-trash-can me-1" /> Excluir Usuário
                                    </CButton>
                                </div>
                            </div>
                        </CForm>
                    )}
                </CCardBody>
            </CCard>
        </Container>
    );
}