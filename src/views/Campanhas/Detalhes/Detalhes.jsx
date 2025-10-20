import { Container, NewDonationContainer } from "./Detalhes.styles";
import CardComponent from "../../../components/Card/Card";



export default function Detalhes() {
  return (
    <Container >
      <CardComponent>
        <NewDonationContainer>
            <h2>Título</h2>
          <div className="content-donation">
            <div className="image">
              <img
                src="https://pbs.twimg.com/media/G3ZRzwbWIAQ6i3c?format=jpg&name=small"
                alt="Imagem de doação"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum,
              deleniti consectetur rerum aliquam iusto voluptate veritatis quos
              repudiandae fugiat provident nulla culpa fugit adipisci maxime porro.
              Impedit, error ea. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti vel quidem nesciunt, aliquid placeat dolorum voluptates
              nulla pariatur, itaque voluptas maiores eius cumque tempora eveniet.
             
            </p>
          </div>

          
        </NewDonationContainer>

      </CardComponent>
    </Container>
  );
};

