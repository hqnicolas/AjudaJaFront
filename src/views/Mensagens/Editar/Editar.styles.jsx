import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 1.5rem;

  .card-title {
    color: var(--color-primary);
    margin-bottom: 1.5rem;
  }

  .grid-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    & > div:nth-child(2) {
      grid-column: 1 / -1;
    }
  }

  .form-actions {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    .btn-secondary {
      background-color: #6c757d;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      text-decoration: none;
      transition: background 0.2s ease-in-out;

      &:hover {
        background-color: #5a6268;
      }
    }
  }
`;