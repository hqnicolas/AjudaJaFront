import styled from "styled-components";

export const HowItWorksContainer = styled.div`
background-color: var(--color-background-home);
padding: 2rem;

h3 {

    font-weight: 700;
    line-height: 1.15;
    color: var(--color-primary);
    margin: 0;
  }

  h3 span {
    color: var(--color-secondary);
  }

.how-it-works-card {

  transition: all 0.3s ease-in-out;
}

.how-it-works-card:hover {
  border-color: var(--bs-primary) !important;
  box-shadow: var(--bs-shadow-lg) !important;
}

.connector-line {
  transform: translateY(-50%);
  right: -0.75rem; 
  width: 1.5rem;
  height: 2px;
  background-color: var(--bs-border-color); 
}`