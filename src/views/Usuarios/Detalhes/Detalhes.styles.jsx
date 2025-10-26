import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 93%;
  margin: 0 auto;
  padding-top: 1.5rem;
  gap: 1.5rem;

  h1 {
    text-align: center;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
`;

export const ContainerUserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 0.5rem;

  img {
    border-radius: 8px;
  }

  p {
    width: 100%;
    font-size: 0.95rem;
    color: #333;
    margin: 0.2rem 0;
  }

  h3 {
    margin-bottom: 0.8rem;
    color: var(--color-primary);
  }

  @media (max-width: 576px) {
    text-align: center;

    p {
      font-size: 0.9rem;
    }
  }
`;
