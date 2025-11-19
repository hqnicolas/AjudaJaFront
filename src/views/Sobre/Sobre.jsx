import { CRow, CCol } from "@coreui/react";
import { 
  SectionHero, 
  SectionContainer, 
  ValuesGrid, 
  ValueCard, 
  ProblemCard,
  FooterContainer 
} from "./Sobre.styles";
import { Footer } from "../../components/Footer/Footer";

export default function Sobre() {
  return (
    <>
     
      <SectionHero>
        <div className="content">
          <h1>Sobre o AjudeJá</h1>
          <p>
            Transformando o caos da ajuda humanitária em ação coordenada e eficiente.
          </p>
        </div>
      </SectionHero>

      
      <SectionContainer>
        <div className="icon-box" style={{backgroundColor: '#e7d5fc', color: 'var(--color-primary)'}}>
          <i className="fa-solid fa-bullseye"></i>
        </div>

        <h2 className="title">Nossa Missão</h2>
        <p className="text">
          Conectar a generosidade do povo brasileiro a quem mais precisa, com
          organização, rastreamento e eficiência.
        </p>
      </SectionContainer>

      
      <SectionContainer>
        <div className="icon-box danger">
          <i className="fa-solid fa-triangle-exclamation"></i>
        </div>

        <h2 className="title">O Problema</h2>
        <p className="text">
          O maior desafio da ajuda humanitária no Brasil não é a falta de solidariedade,
          mas a desorganização.
        </p>

        <CRow className="g-4 mt-3">
          {[
            { title: "Doações Inadequadas", text: "Itens inúteis chegam enquanto faltam suprimentos essenciais." },
            { title: "Colapso Logístico", text: "Pontos de coleta sobrecarregados e sem controle." },
            { title: "Desconexão Total", text: "Doadores, voluntários e vítimas desconectados." },
            { title: "Falta de Transparência", text: "Sem rastreamento, confiança diminui." }
          ].map((item, i) => (
            <CCol md={6} key={i}>
              <ProblemCard>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </ProblemCard>
            </CCol>
          ))}
        </CRow>
      </SectionContainer>

   
      <SectionContainer>
        <div className="icon-box info">
          <i className="fa-solid fa-lightbulb"></i>
        </div>

        <h2 className="title">A Solução</h2>
        <p className="text">
          Um sistema completo de gerenciamento de doações, com controle, rastreamento e transparência.
        </p>

        <CRow className="g-4 text-center mt-3">
          {[
            { icon: "fa-shield-halved", title: "Gestão Centralizada", text: "Tudo em um só lugar."},
            { icon: "fa-heart", title: "Rastreamento Completo", text: "Acompanhe cada etapa."},
            { icon: "fa-bolt", title: "Eficiência Máxima", text: "Dados e relatórios estratégicos." }
          ].map((item, i) => (
            <CCol md={4} key={i}>
              <div className="solution-box rounded-4" style={{backgroundColor: 'var(--color-background-home)'}}>
                <div className="solution-icon">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </CCol>
          ))}
        </CRow>
      </SectionContainer>

     
      <SectionContainer>
        <h2 className="title">Nossos Valores</h2>
        <p className="text">Princípios que guiam nossas ações</p>

        <ValuesGrid>
          {[
            { title: "Transparência", text: "Cada doação é verificável." },
            { title: "Eficiência", text: "Máximo impacto com menos desperdício." },
            { title: "Solidariedade", text: "Conectando quem quer ajudar." },
            { title: "Inovação", text: "Tecnologia para o bem comum." }
          ].map((item, i) => (
            <ValueCard key={i} className="border connector-line bg-white rounded-4 p-4 border">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </ValueCard>
          ))}
        </ValuesGrid>
      </SectionContainer>

    
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}
