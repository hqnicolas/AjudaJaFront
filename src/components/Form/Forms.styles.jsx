import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .forms {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25%;
    height: auto;
    padding: 2rem;
    border: 3px solid #e0e0e0;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);

    .input-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: #D9D9D9;
      width: 100%;
      border-radius: 4px;

      i {
        padding: 0.5rem;
        font-size: 1rem;
        width: 2rem;
      }
    }

    .form-items {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;

      input {
        border-radius: 4px;
        all: unset;
        background-color: #f1f1f1;
        width: 100%;
        height: 1.5rem;
        padding: 0.4rem 0.6rem;
        border: 1px solid #D9D9D9;
        font-size: 0.95rem;

        &:focus-within {
          background-color: #fff;
        }

        &::placeholder {
          font-size: 0.9rem;
          color: #888;
        }
      }
    }

    img {
      width: 10rem;
      margin-bottom: 1rem;
    }

    .change-form {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      width: 100%;
      font-weight: 400;
      cursor: pointer;
      text-align: end;

      .change-form-child {
        color: var(--color-primary);
        margin-left: 0.2rem;
        font-weight: 600;
        &:hover {
            text-decoration: underline;
        }  
    }
      
    }

    .btn-submit {
      margin-top: 2rem;
      width: 60%;
    }
  }

 

  @media (max-width: 1200px) {
    .forms {
      width: 40%;
    }
  }

  @media (max-width: 992px) {
    .forms {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    .forms {
      width: 70%;
      padding: 1.5rem;
    }

    img {
      width: 8rem;
    }

    .btn-submit {
      width: 80%;
    }
  }

  @media (max-width: 576px) {
    height: auto;

    .forms {
      width: 90%;
      padding: 1rem;
      border-width: 2px;
    }

    .form-items input {
      font-size: 0.85rem;
    }

    .change-form {
      font-size: 0.8rem;
    }

    img {
      width: 7rem;
    }

    .btn-submit {
      width: 100%;
    }
  }
`
