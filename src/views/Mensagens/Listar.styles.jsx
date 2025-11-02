import styled from "styled-components";

export const Container = styled.div`
align-items: center;
justify-content: center;
flex-direction: column;
margin: 2rem auto;
padding: 2rem;
width: 100vw;
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
    flex-direction: row;
    gap: 0.75rem;
    justify-content: flex-end;
    min-width: 180px;
  }

  .data {
    font-size: 0.85rem;
    color: #777;
    margin-top: 0.25rem;
  }
`;