import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  margin: 0 auto;
  flex: 1;
`;

export const NewDonationContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  max-height: 85vh; 

  h2 {
    text-align: center;
    color: var(--color-primary);
  }

  .content-donation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem;
    border-radius: 8px;
    overflow: hidden;

    .image {
      width: 80%;
      height: 20rem;
      overflow: hidden;
      border-radius: 8px;
      flex-shrink: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 2px solid var(--color-primary);
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35);
    }

    p {
      text-indent: 1rem;
 
      padding-right: 0.5rem;
      flex: 1;
      min-height: 0; 
      max-height: 250px;
    }
  }

  .form-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    width: 100%;
    border-radius: 8px;
  }
`;
