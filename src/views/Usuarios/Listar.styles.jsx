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
      font-size: 0.75rem !important; 
      padding: 0.5rem 0.75rem !important; 
      white-space: nowrap; 
    }

    & > a {
      flex-shrink: 0; 
    }
  }
`;