import styled from "styled-components";

export const Container = styled.div`
align-items: center;
justify-content: center;
flex-direction: column;
margin: 2rem auto;
padding: 2rem;
width: 100%;

.lista-doacoes-header {
  flex-wrap: nowrap !important;
  gap: 0.5rem; 
}

@media (max-width: 767.98px) {
    width: 100% !important; 
    .lista-doacoes-header {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem; 
        width: 100% !important; 
  }
  .lista-doacoes-header h3 {
    font-size: 1.1rem !important; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
  }

  .lista-doacoes-header .btn-primary {
    font-size: 0.75rem !important; 
    padding: 0.5rem 0.75rem !important; 
    white-space: nowrap;
    .fa-plus {
      margin-right: 0.25rem !important;
    }
  }

  .lista-doacoes-header a {
    flex-shrink: 0;
  }
}
`;
