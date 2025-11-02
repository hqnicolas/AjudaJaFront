

import { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import { Container, ContainerCampaigns } from "./ListarCampanhas.styles";
import CardComponent from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';




const mockCampanhas = [
  { 
    id: 1, 
    titulo: 'Ajuda às Vítimas da Chuva', 
    imagem: 'https://assets.brasildefato.com.br/2024/09/image_processing20210520-1578-1kburbm-750x449.jpeg', 
    descricao: 'Participe dessa campanha para levar roupas, às famílias afetadas pelas fortes chuvas.' 
  },
  { 
    id: 2, 
    titulo: 'Mochilas para Crianças', 
    imagem: 'https://paverama.rs.gov.br/uploads/noticia/20489/maior_Entrega_dos_uniformes_III.jpg', 
    descricao: 'Doe mochilas e materiais escolares para crianças em situação de vulnerabilidade e ajude.' 
  },
  { 
    id: 3, 
    titulo: 'Refeições Comunitárias', 
    imagem: 'https://www.ba.gov.br/comunicacao/sites/site-comunicacao/files/migracao_2024/arquivos/wp-content/uploads/2024/07/Fotos-Thuane-MariaGOVBA-2-1.jpg', 
    descricao: 'Contribua para oferecer refeições nutritivas a pessoas em situação de rua.' 
  },
];

export default function ListarCampanhas() {
  const [campanhas, setCampanhas] = useState([]);

  useEffect(() => {

    setCampanhas(mockCampanhas);
  }, []);

  return (
    <Container>
      <div className="header-campaigns">
        <div className="title-box">
          <h1 className="title">Campanhas</h1>
          <p className="description-title">
            Aqui você encontra campanhas ativas que precisam da sua ajuda. Cada
            contribuição faz diferença e ajuda a levar esperança a quem mais
            precisa. Escolha uma causa e faça parte dessa corrente de solidariedade!
          </p>
        </div>

      </div>

      <CardComponent>
        <ContainerCampaigns>
          <div className="campaigns-list">
            {campanhas.map(campanha => (
              <Card key={campanha.id}>
                <div className='image'>
                  <Card.Img variant="top" src={campanha.imagem} alt={campanha.titulo} />
                </div>
                <Card.Body>
                  <Card.Title>{campanha.titulo}</Card.Title>
                  <Card.Text>{campanha.descricao}</Card.Text>
                  <Link to={`/ajude-ja/campanhas/detalhes/${campanha.id}`} className="link-donation">
                    <Button typeButton="secondary" >Ver mais</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </ContainerCampaigns>
      </CardComponent>
    </Container>
  );
}