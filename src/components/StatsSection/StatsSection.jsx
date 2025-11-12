import { StatsContainer } from "./StatsSection.styles";


export const StatsSection = () => {
  const stats = [
    { value: "50K+", label: "Vidas Transformadas" },
    { value: "R$ 2M+", label: "Doações Arrecadadas" },
    { value: "200+", label: "ONGs Parceiras" },
    { value: "1K+", label: "Campanhas Ativas" },
  ];

  return (
  <StatsContainer>
   
   
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4 g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col">
              <div
                className="text-center p-4 rounded-4  border stat-card h-100 w-100"
              >
                <div className="display-4 fw-bold  mb-2 text-value">
                  {stat.value}
                </div>
                <div className="text-muted">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </StatsContainer>
  );
};