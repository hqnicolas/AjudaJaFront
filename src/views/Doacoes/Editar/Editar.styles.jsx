import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 0.95rem;

    input {
      margin-top: 0.25rem;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 0.95rem;

      &:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Message = styled.p`
  color: ${({ type }) => (type === 'error' ? 'red' : 'green')};
  margin-bottom: 1rem;
  text-align: center;
`;