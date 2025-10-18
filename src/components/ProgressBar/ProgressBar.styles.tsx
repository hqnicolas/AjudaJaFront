import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;

  .progress {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 1rem;
    border-radius: 5px;
    background-color: #e0e0e0; 
  }

  .progress-bar {
    background-color: #46dd00 !important; 
    font-size: 0.75rem;
    height: 1rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrecadation {
    display: flex;
    justify-content: space-between;
    margin-top: 0.3rem;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;