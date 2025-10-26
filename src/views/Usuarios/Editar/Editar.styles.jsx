import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 93%;
  margin: 0 auto;
  padding-top: 1.5rem;

  .grid-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    width: 100%;
  }

  @media (max-width: 576px) {
    .grid-form {
      grid-template-columns: 1fr;
    }
  }
`;
