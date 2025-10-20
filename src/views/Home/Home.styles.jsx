import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: rgba(232, 239, 136, 0.3);

  .content-container {
    width: 100%;
    max-width: 1200px;
    gap: 2rem;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      color: var(--color-primary);
    }

    h1 span {
      color: var(--color-secondary);
    }

    p {
      font-size: 1.1rem;
      margin: 1rem 0;
      font-weight: 500;
      color: var(--color-primary);
    }

    a button {
      margin-top: 1rem;
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
      text-decoration: none;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 992px) {
    padding: 1.5rem;
    align-items: start;
    .content-container {
      gap: 1.5rem;

      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 768px) {

    .content-container {
      flex-direction: column;
      text-align: center;

      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 0.95rem;
      }

      a .button {
        margin: 0 auto;
        width: 80%;
        text-decoration: none;
      }

      img {

        margin-left: 3rem;
      }
    }
  }

  @media (max-width: 480px) {
    .content-container {
      h1 {
        font-size: 1.8rem;
      }

      p {
        font-size: 0.9rem;
      }

   
    }
  }
`;
