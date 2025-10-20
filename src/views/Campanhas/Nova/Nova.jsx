import { Container, NewDonationContainer } from "./Nova.styles";
import CardComponent from "../../../components/Card/Card";
import FormDonationCoreUI from "../../../components/FormDonation/FormDonation";


export default function Nova() {
  return (
    <Container >
      <CardComponent>
        <NewDonationContainer>

          <div className="form-section">
            <h2>Faça sua doação</h2>
            <FormDonationCoreUI />
          </div>
        </NewDonationContainer>

      </CardComponent>
    </Container>
  );
};

