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

    .navbar {
        background-color: #fff !important;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .navbar-brand span {
        color: var(--color-primary);
        font-weight: 700;
    }

    .nav-link {
        color: var(--color-primary) !important;
        font-weight: 600;
       
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    .nav-link:hover {
        color: var(--color-primary-hover) !important;
    }

    .navbar-collapse {
        width: 100%;
    }

  
    .navbar-collapse .c-navbar-nav {
        width: 100%;
        
    }

    @media (max-width: 992px) {
        img{

            display: none;
        }
        .navbar-collapse .c-navbar-nav {
            align-items: flex-start;
            gap: 0.5rem;
        }
        
        .navbar-collapse{
          
            margin-top: 10rem;
            background-color: var(--color-background);
            border: 1px solid #dfdfdf;
            border-radius: 5px;
            padding: 1rem;
        }
    }
`;