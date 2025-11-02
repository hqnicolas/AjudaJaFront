import styled from 'styled-components';

export const Container = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;


  .forms {
    width: 100%;
    max-width: 400px; 
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
  
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    img {
      width: 120px;
      margin: 0 auto 1rem auto;
      display: block;
    }

    .change-form {
      font-size: 0.9rem;
      text-align: center;
      margin-top: 0.5rem;

      .change-form-child {
        color: var(--color-primary);
        font-weight: 600;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .btn-submit {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 1rem;
      button{
        width: 100%;
      }
    }
  }

  @media (max-width: 576px) {
    .forms {
      padding: 1rem;
    }

    img {
      width: 100px;
    }
  }
`;
