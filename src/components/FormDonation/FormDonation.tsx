import { useState } from 'react';
import {
  CForm,
  CFormInput,
  CFormSelect,
  CFormLabel,
  CButton,
  CRow,
  CCol,
} from '@coreui/react';

export default function FormDonationComponent() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    quantity: 1,
    donor: '',
    receiverDate: '',
    expiryDate: '',
    validityPeriod: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
 I
  };

  return (
    <CForm onSubmit={handleSubmit} className="p-4 bg-light rounded shadow-sm">
      <CRow className="g-3">
        <CCol md={6}>
          <CFormLabel htmlFor="name">Nome</CFormLabel>
          <CFormInput
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Digite o nome"
          />
        </CCol>


        <CCol md={6}>
          <CFormLabel htmlFor="type">Tipo</CFormLabel>
          <CFormSelect
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o tipo</option>
            <option value="Material">Material</option>
            <option value="Financeira">Financeira</option>
          </CFormSelect>
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="quantity">Quantidade</CFormLabel>
          <CFormInput
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="donor">Armazém</CFormLabel>
          <CFormInput
            id="donor"
            name="donor"
            type="text"
            value={formData.donor}
            onChange={handleChange}
            required
            placeholder="Nome do Amazém"
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="receiverDate">Data de recebimento</CFormLabel>
          <CFormInput
            id="receiverDate"
            name="receiverDate"
            type="date"
            value={formData.receiverDate}
            onChange={handleChange}
            required
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="expiryDate">Data de validade</CFormLabel>
          <CFormInput
            id="expiryDate"
            name="expiryDate"
            type="date"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
        </CCol>

        <CCol md={12}>
          <CFormLabel htmlFor="validityPeriod">Período de validade (em dias)</CFormLabel>
          <CFormInput
            id="validityPeriod"
            name="validityPeriod"
            type="number"
            min="1"
            max="999"
            value={formData.validityPeriod}
            onChange={handleChange}
            required
          />
        </CCol>

        <CCol xs={12} className="text-center mt-3">
          <CButton color="primary" type="submit">
            Enviar
          </CButton>
        </CCol>
      </CRow>
    </CForm>
  );
}
