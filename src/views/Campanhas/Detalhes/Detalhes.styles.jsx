import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
  margin: 0 auto;
  flex: 1;
`

export const NewDonationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  gap: 2rem;

  h2 {
    text-align: center;
    color: var(--color-primary);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .content-donation {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: 100%;

    .image {
      flex: 1;
      max-height: 400px;
      overflow: hidden;
      border-radius: 8px;
      
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 2px solid #dfdfdf;
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35);
    }

    p {
      flex: 2;
      margin: 0;
      padding: 0;
      font-size: 1rem;
      line-height: 1.5;
      text-align: justify;
    }
  }


  @media (max-width: 992px) {
    .content-donation {
      flex-direction: column; 
      align-items: center;

      .image {
        width: 100%;
        max-height: 300px;
        
      }

      p {
        width: 100%;
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 576px) {
    padding: 1rem;

    h2 {
      font-size: 1.5rem;
    }

    .content-donation {
      .image {
        max-height: 50vh;
        object-fit: cover;

      }

      p {
        font-size: 0.9rem;
        line-height: 1.4;
      }
    }
  }
`
