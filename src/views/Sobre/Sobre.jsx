import { FooterContainer, HowItWorksContainer, MainContainer, StatsContainer } from "./Sobre.styles";
import { StatsSection } from "../../components/StatsSection/StatsSection";
import { HowItWorks } from "../../components/HowItWorks/HowItWorks";
import { Footer } from "../../components/Footer/Footer";

export default function Sobre() {
  return (
    <>
      <StatsContainer>
        <StatsSection />
      </StatsContainer>
      <HowItWorksContainer>
        <HowItWorks />
      </HowItWorksContainer>
      <FooterContainer>
      <Footer />
      </FooterContainer>
    </>
  );
}
