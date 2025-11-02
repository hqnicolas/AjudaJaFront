import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(232, 239, 136, 0.3);
  width: 100%;
  min-height: calc(100vh - 4rem); 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
  .content-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
   
    align-items: center;
    justify-content: center;
    text-align: center;
  }

   .content-container h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.15;
    color: var(--color-primary);
    margin: 0;
  }

  .content-container h1 span {
    color: var(--color-secondary);

  }

  .content-container p {
    font-size: 1.05rem;
    margin: 1rem 0;
    color: var(--color-primary);
    max-width: 520px;
        font-weight: 600;
  }

  .content-container img {
    width: 100%;
    max-width: 480px;
    height: auto;
    display: block;
    margin-left: 2rem;
  }
  @media (max-width: 992px) {
    .content-container {
      gap: 1.5rem;
      flex-direction: column-reverse; 
      text-align: center;
    }
    .content-container h1 {
      font-size: 2.2rem;
    }
    .content-container p {
      font-size: 1rem;
      max-width: 100%;
      padding: 0 1rem;
    }
    .content-container img {
      max-width: 300px;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 480px) {
    .content-container h1 {
      font-size: 1.6rem;
    }
    .content-container p {
      font-size: 0.95rem;
    }
    padding: 1rem;
  }
`;
