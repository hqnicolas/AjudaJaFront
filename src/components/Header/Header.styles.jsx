import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  z-index: 1000;
  align-items: center;
  justify-content: space-between; 
  padding: 0 1.5rem;

  .navbar-nav {
    flex-wrap: nowrap;
    /* margin: 0 auto; Removed to allow right alignment */

    @media (max-width: 991.98px) {
      overflow-x: auto;
     
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .nav-link {
    color: var(--color-primary) !important;
    font-weight: 600;
    font-size: 1rem; 

    @media (max-width: 991.98px) {
      font-size: 0.85rem; 
      padding: 0.5rem 0.8rem;
    }
  }
  
  .nav-link:hover {
    color: var(--color-primary-hover) !important;
  }

  .navbar-brand span {
    color: var(--color-primary);
    font-weight: 700;
  }
  
  @media (max-width: 992px) {
    img{
      display: none; 
    }
  }
 
`;