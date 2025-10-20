import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10rem;
  background-color: rgba(232, 239, 136, 0.582);
  overflow: hidden;

  h1,
  p {
    text-align: start;
    color: var(--color-primary);
    width: 70%;
    margin-left: 10rem;
    font-weight: 700;
    font-size: 4rem;
    line-height: 1.1;
  }
  p {
    font-size: 19px;
    font-weight: 500;
  }
  span {
    color: var(--color-secondary);
  }
  img {
    width: 60%;
  }
  a {
    text-decoration: none;
    button {
      margin-left: 10rem;
      font-size: 17px;
    }
  }
`;
