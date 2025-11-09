
import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: var(--color-background-home); 
  width: 100%;
  min-height: calc(100vh - 4rem); 
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 5rem;
  .content-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .content-container h1 {

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
    min-height: auto; 
    padding-top: 3rem;
    padding-bottom: 3rem;

    .content-container {
      gap: 1.5rem;
      flex-direction: column-reverse; 
      text-align: center;
    }
    .content-container h1 {
      margin-left: 1.1rem;
      font-size: 2.2rem;
      text-align: start;
    }
    .content-container p {
      font-size: 1rem;
      max-width: 100%;
      padding: 0 1rem;
      text-align: start;
    }
    .content-container img {
      max-width: 300px;
      margin-bottom: 1rem;
      margin-left: 0; 
    }
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    
    .content-container h1 {
      font-size: 1.6rem;
      margin-left: 1.1rem;
      text-align: start;
    }
    .content-container p {
      font-size: 0.95rem;
      text-align: start;
    }
    .content-container a button {
      width: 50%;
      margin-left: 1.1rem;
      text-align: start;
    }
    padding: 1rem;
  }
`;

export const StatsContainer = styled.footer`
  margin-top: 5rem;
  `;
export const HowItWorksContainer = styled.footer`
  margin-top: 5rem;
  `;
export const FooterContainer = styled.footer`

 `;