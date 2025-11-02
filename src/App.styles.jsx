import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  main {
    flex: 1;
    width: 100%;
    min-height: calc(100vh - 4rem);
    padding-top: 4rem; 
    overflow-x: hidden;
    overflow-y: auto; 
    -webkit-overflow-scrolling: touch;
  }
`;
