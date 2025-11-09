import styled from "styled-components";

export const Container = styled.div`
align-items: center;
justify-content: center;
flex-direction: column;
margin: 2rem auto;
padding: 2rem;
width: 100vw;
`;

export const ListHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  flex-wrap: nowrap !important;
  gap: 0.5rem; 

  @media (max-width: 767.98px) {
    flex-direction: column;
    
    h3 {
      font-size: 1.1rem !important; 
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis; 
    }


    a > button {
      font-size: 0.70rem !important; 
      padding: 0.5rem 0.75rem !important; 
      white-space: nowrap; 
    }
    a > button > .fa-plus {
      margin-right: 0.25rem !important;
      margin-top: 0 !important; 
    }

    & > a {
      flex-shrink: 0; 
    }
  }
`;
export const ListaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ItemMensagem = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  .conteudo {
    flex: 1;
    font-size: 0.95rem;
    color: #333;
    display: flex;
    flex-direction: column;
  }

  .acoes {
    display: flex;
    flex-direction: row; /* Padrão: linha (desktop) */
    gap: 0.75rem;
    justify-content: flex-end;
    min-width: 180px;
  }

  /* --- Responsividade do Item da Lista --- */
  @media (max-width: 767.98px) {
    flex-direction: column; /* No mobile, o conteúdo e as ações ficam em coluna */
    align-items: flex-start; /* Alinha o conteúdo à esquerda */

    .conteudo {
      margin-bottom: 1rem; /* Adiciona espaço entre o conteúdo e as ações */
      font-size: 0.9rem; /* Diminui a fonte do conteúdo */
    }

    .data {
      font-size: 0.75rem; /* Diminui a fonte da data */
    }
    
    .acoes {
      /* As ações devem ocupar 100% da largura do item no mobile */
      width: 100%; 
      flex-direction: column; /* Coloca os botões em coluna */
      gap: 0.5rem; /* Diminui o espaçamento entre os botões */
      min-width: unset; /* Remove a largura mínima */
    }

    /* Garante que os botões (CButton) ocupem 100% da largura das ações */
    .acoes a {
      width: 100%; 
    }
    .acoes .btn { /* Se CButton renderiza como .btn */
      width: 100%;
      text-align: center;
      justify-content: center; /* Centraliza o texto e ícone no botão */
    }
  }

  .data {
    font-size: 0.85rem;
    color: #777;
    margin-top: 0.25rem;
  }
`;

