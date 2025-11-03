import { CCol, CRow } from "@coreui/react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { logo_ajude_ja } from "../../assets/logo";
import { Container } from "./Home.styles";

export default function Home() {
  return (
    <Container className="d-flex - justify-content-center">
      <CRow className="content-container w-100 align-items-center ">
  
        <CCol xs={12} md={6} className="text-center text-md-start">
          <h1>
            Transforme Vidas <br />
            com <span>Generosidade</span>
          </h1>
          <p>
            Transforme boas intenções em ação real. Com o AjudeJá, cada doação é
            direcionada, rastreada e faz a diferença onde mais importa.
          </p>

          <Link to="/campanhas">
            <Button typeButton="secondary" className="button">
              Salvar uma vida
            </Button>
          </Link>
        </CCol>

        
        <CCol xs={12} md={6} className="d-flex justify-content-center">
          <img src={logo_ajude_ja} alt="Logo Ajude Já" className="img-fluid" />
        </CCol>
      </CRow>
    </Container>
  );
}
