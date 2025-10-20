import { CCol, CContainer, CRow } from "@coreui/react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { logo_ajude_ja } from "../../assets/logo";
import { Container } from "./Home.styles";


export default function Home() {
    return (
        <Container>
            <CRow className="w-100 align-items-center justify-content-center text-center">
                <CCol md={6}>
                    <h1>
                        Transforme Vidas <br /> com <span>Generosidade</span>
                    </h1>
                    <p>
                        Transforme boas intenções em ação real. Com o AjudeJá, cada doação é direcionada, rastreada e faz a diferença onde mais importa.
                    </p>
                    <Link to="/ajude-ja/campanhas">
                        <Button typeButton={"secondary"}>Iniciar uma Campanha</Button>
                    </Link>
                </CCol>

                <CCol md={6}>
                    <img src={logo_ajude_ja} alt="Logo Ajude Já" className="img-fluid" />
                </CCol>
            </CRow>
        </Container>
    )
}