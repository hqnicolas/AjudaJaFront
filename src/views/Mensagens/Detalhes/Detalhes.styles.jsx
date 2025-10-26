import styled from 'styled-components'

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

export const ContainerMessageDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    text-align: left;
    gap: 0.5rem;
    padding: 1rem; 
    width: 100%;

    p {
        width: 100%;
        font-size: 0.95rem;
        color: #333;
        margin: 0.5rem 0;
        line-height: 1.6;
    }

    h3 {
        margin-bottom: 0.8rem;
        color: var(--color-primary);
        align-self: center; 
    }

    @media (max-width: 576px) {
        p {
            font-size: 0.9rem;
        }
    }
`;
