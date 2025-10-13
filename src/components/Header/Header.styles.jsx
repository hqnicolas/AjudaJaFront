import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
margin-bottom: 3rem;
  .navbar-left{
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      width: 4rem;
      height: 4rem;
    }
  }

  .navbar-center {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .navbar-right {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0.5rem 1rem;

    .navbar-center {
      width: 100%;
      margin: 0.5rem 0;
    }
    
    .navbar-right {
      width: 100%;
      justify-content: center;
      margin-bottom: 0.5rem;
    }
  }
`;

export const CenterNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 33rem;

  a{
    font-size: 1.1rem;
    text-decoration: none;
    color: var(--color-primary);
    font-weight: 600;
    transition: 0.2s ease-in;
    
    &:hover{
      color: var(--color-primary-hover);
    }
  }

  @media (max-width: 1024px) {
    width: auto;
    gap: 0.5rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    width: 100%;
  }
`;