import styled from "styled-components";

export const Container = styled.div`
.header-campaigns {
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  align-items: flex-start; 
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-top: 1.5rem;
  width: 93%;
  margin: 0 auto;
}

.title-box {
  flex: 1 1 60%; 
  color: var(--color-primary);
}

.button-box {
  flex: 1 1 35%; 
  display: flex;
  justify-content: flex-end; 
  align-items: flex-start;
}

`;
export const ContainerCampaigns = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%;
  margin: 0 auto;

  .campaigns-list {
    display: flex; 
    flex-wrap: wrap;
    gap: 20px; 
    width: 100%;
    justify-content: center;
    text-align: center;
    flex: 1;
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      width: 25%; 
      height: 22rem;
      border: 1px solid #ddd;
      background-color: var(--color-primary); 
      color: var(--color-text-secondary);

      .image {
        height: 200px; 
        width: 100%;
        overflow: hidden;
      }

      .card-img-top {
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
        width: 100%;
      }

      .link-donation {
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: #000;
        padding: 2px;
        width: 100%;
        flex: 1;
        border-radius: 8px;
        align-items: center;

        button {
          width: 100%;
        }
      }
    }
  }

  /* Responsividade */
  @media (max-width: 1200px) {
    .campaigns-list .card {
      width: 45%; /* 2 cards por linha */
    }
  }

  @media (max-width: 768px) {
    .campaigns-list {
      gap: 15px;
    }
    .campaigns-list .card {
      width: 100%; /* 1 card por linha */
    }
  }

  @media (max-width: 576px) {
    .campaigns-list .card {
      width: 100%; /* mantém 1 card por linha */
    }
  }
`;
