import { CCol, CRow } from "@coreui/react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { logo_ajude_ja } from "../../assets/logo";
import { Container } from "./Home.styles";

export default function Home() {
  return (
    <Container>
      <CRow className="content-container justify-content-center align-items-center text-center text-md-start flex-column-reverse flex-md-row">
        {/* Texto */}
        <CCol xs={12} md={6} lg={5}>
          <h1>
            Transforme Vidas <br />
            com <span>Generosidade</span>
          </h1>
          <p>
            Transforme boas intenções em ação real. Com o AjudeJá, cada doação é direcionada, rastreada e faz a diferença onde mais importa.
          </p>
          <Link to="/ajude-ja/campanhas" >
            <Button typeButton="secondary" className="button">Iniciar uma Campanha</Button>
          </Link>
        </CCol>

 
        <CCol xs={12} md={6} lg={5} className="mb-4 mb-md-0">
          <img src={logo_ajude_ja} alt="Logo Ajude Já" className="img-fluid" />
        </CCol>
      </CRow>
    </Container>
  );
}
