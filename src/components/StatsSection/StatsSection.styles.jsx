import styled from 'styled-components' 

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

.stat-card {
  transition: all 0.3s ease-in-out;
    background-color: var(--color-background-home); 
  border: 2px solid var(--bs-light);
  border-radius: 10px;
}

.stat-card:hover {
  border-color: var(--bs-primary) !important;
  box-shadow: var(--bs-shadow-lg) !important;
}
.text-value{
  color: var(--color-primary);
}
  
`;