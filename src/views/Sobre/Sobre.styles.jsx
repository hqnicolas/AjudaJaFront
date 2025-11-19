import styled from "styled-components";

export const SectionHero = styled.section`
  background: var(--color-primary);
  color: #fff;
  padding: 6rem 1rem;
  text-align: center;

  .content {
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const SectionContainer = styled.section`

  padding: 4rem 1rem;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;

  .title {
    font-weight: 700;
    margin-top: 1rem;
    color: var(--color-primary);
  }

  .text {
    max-width: 650px;
    margin: 0.5rem auto 2rem auto;
    color: var(--color-primary);
    opacity: 0.7;
  }

  .icon-box {
    width: 80px;
    height: 80px;
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1rem auto;
    font-size: 2rem;

    &.primary {
      background: var(--color-primary-light);
      color: var(--color-primary);
    }
    &.danger {
      background: #fee;
      color: #d9534f;
    }
    &.info {
      background: #e7f5ff;
      color: var(--color-secondary);
    }
  }

  .solution-box {
    padding: 1.5rem;
  }

  .solution-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }
`;

export const ProblemCard = styled.div`
  background: var(--color-background-home);
  border: 1px solid var(--bs-light);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: left;
  box-shadow: var(--bs-shadow-sm);

  h4 {
    color: var(--color-primary);
    font-weight: 600;
  }

  p {
    color: var(--color-primary);
    opacity: 0.7;
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ValueCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--bs-shadow-sm);

  h4 {
    font-weight: 700;
    color: var(--color-primary);
  }

  p {
    margin-top: 0.4rem;
    color: var(--color-primary);
    opacity: 0.7;
  }
`;

export const FooterContainer = styled.div`
  margin-top: 4rem;
`;
