import styled from 'styled-components';

export const ButtonContainer = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3.3rem;
  border-radius: 8px;
  font-size: 0.8rem;
  cursor: pointer;
    font-weight: 600;
    text-align: center;
  background-color: ${(props) =>
    props.typeButton == 'primary'
      ? 'var(--color-primary)'
      : props.typeButton == 'secondary'
      ? 'var(--color-secondary)'
      : 'var(--grey-0)'};

  color: ${(props) =>
    props.typeButton == 'primary'
      ? '#fff'
      : props.typeButton == 'secondary'
      ? 'var(--color-primary)'
      : 'var(--grey-0)'};

   &:hover {
    background-color: ${(props) =>
        props.typeButton == 'primary'
        ? 'var(--color-primary-hover)'
        : props.typeButton == 'secondary'
        ? 'var(--color-secondary-hover)'
        : 'var(--grey-0)'};
      }
`;
