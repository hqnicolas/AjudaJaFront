import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;

  .forms {
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      color: var(--color-primary);
      font-weight: 700;
      text-align: center;
    }

    .btn-submit {
      margin-top: 1.5rem;
      display: flex;
      justify-content: center;
      width: 100%;

      button {
        width: 100%;
      }
    }
  }

  @media (max-width: 576px) {
    padding: 1rem;

    .forms {
      padding: 1.5rem;
      max-width: 100%;
    }
  }
`;