import { HowItWorksContainer } from "./HowItWorks.styles";


export const HowItWorks = () => {
    const steps = [
        {
            icon: "fa-solid fa-magnifying-glass",
            title: "Escolha uma Causa",
            description: "Navegue por centenas de campanhas e encontre aquela que toca seu coração.",
        },
        {
            icon: "fa-solid fa-hand-holding-heart",
            title: "Doe com Segurança",
            description: "Suas doações são processadas com segurança e rastreadas em tempo real.",
        },
        {
            icon: "fa-solid fa-chart-line",
            title: "Acompanhe o Impacto",
            description: "Veja exatamente como sua generosidade está fazendo a diferença.",
        },
    ];

    return (
        <HowItWorksContainer >
            <div className="container">
                <div className="text-center mb-5">
                    <h3 className="display-4 fw-bold mb-3">
                        Como <span>Funciona</span>
                    </h3>
                    <p className="  mx-auto fw-semibold">
                        Doar nunca foi tão simples e transparente. Siga estes passos para começar
                        a transformar vidas hoje.
                    </p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {steps.map((step, index) => (
                        <div key={index} className="col position-relative">
                            <div className="bg-white rounded-4 p-4 border h-100 how-it-works-card">
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-4 mb-4 bg-primary-subtle"
                                    style={{ width: '4rem', height: '4rem' }}
                                >
                                    <i className={`${step.icon} fs-2 text-primary`} />
                                </div>
                                <h3 className="h3 fw-bold mb-3">{step.title}</h3>
                                <p className="text-muted">{step.description}</p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="d-none d-md-block position-absolute top-50 connector-line"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </HowItWorksContainer>
    );
};