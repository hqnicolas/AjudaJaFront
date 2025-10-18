import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    color: var(--text, #1f2937);
    .title-box{
        margin-left: 2rem;
        width: 45%;
        padding-bottom: 20px;
        color: var(--color-primary); 
    }
`;
export const ContainerCampaigns = styled.div`
    display: flex;
    justify-content: center; 
    width: 100%;
    margin: 0 auto;

    .campaigns-list{
        display: flex; 
        flex-wrap: wrap;
        gap: 20px; 
        width: 20%;
        justify-content: center;
        text-align: center;
        flex: 1;
        .card{
            flex: 1;
            border-radius: 8px;
            width: 20rem; 
            border: 1px solid #ddd;
            background-color: var(--color-primary); 
            color: var(--color-text-secondary);
            .image {
                height: 200px; 
                width: 100%;
                overflow: hidden;
            }
            
            .card-img-top{
                width: 100%;
                height: 100%;
                object-fit: cover; 
                border-radius: 8px 8px 0 0;
            }
            
            .card-body {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding: 1rem;
            }
            .link-donation{
                text-decoration: none;
                color: #000000;
               padding: 2px;
                width: 45%;
                background-color: #ebc90c;
                border-radius: 8px;
            }
        }
    }
`;