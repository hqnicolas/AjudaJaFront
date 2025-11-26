

import { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import { Container, ContainerCampaigns } from "./ListarCampanhas.styles";
import CardComponent from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { CCard } from '@coreui/react';
const mockCampanhas = [
  {
    id: 1,
    titulo: 'Ajuda às Vítimas da Chuva',
    imagem: 'https://f.i.uol.com.br/fotografia/2025/11/24/1764032719692500cf73ab6_1764032719_3x2_md.jpg',
    descricao: 'Participe dessa campanha para levar roupas e itens essenciais às famílias afetadas pelas fortes chuvas.'
  },
  {
    id: 2,
    titulo: 'Mochilas para Crianças',
    imagem: 'https://paverama.rs.gov.br/uploads/noticia/20489/maior_Entrega_dos_uniformes_III.jpg',
    descricao: 'Doe mochilas e materiais escolares para crianças em situação de vulnerabilidade e ajude no retorno às aulas.'
  },
  {
    id: 3,
    titulo: 'Refeições Comunitárias',
    imagem: 'https://www.ba.gov.br/comunicacao/sites/site-comunicacao/files/migracao_2024/arquivos/wp-content/uploads/2024/07/Fotos-Thuane-MariaGOVBA-2-1.jpg',
    descricao: 'Contribua para oferecer refeições nutritivas e quentes a pessoas em situação de rua.'
  },
  {
    id: 4,
    titulo: 'Kit de Recomeço: Utensílios Domésticos',
    imagem: 'https://www.rotulosonline.com.br/wp-content/uploads/2018/02/utensilios-de-cozinha1.png',
    descricao: 'Arrecade itens básicos como fogões, geladeiras, colchões e panelas para que as famílias em casas reconstruídas possam recomeçar.',
    categoria: 'Necessidades Básicas'
  },
  {
    id: 5,
    titulo: 'Abrigos Temporários e Refúgio Animal',
    imagem: 'https://www.rbsdirect.com.br/filestore/2/6/1/1/7/9/4_51b41cb28154c44/4971162_1b540dc394a407e.jpg?w=700',
    descricao: 'Ajude a financiar a montagem e manutenção de abrigos temporários seguros para famílias e também para os animais de estimação resgatados.',
    categoria: 'Abrigo e Resgate'
  },
  {
    id: 6,
    titulo: 'Kit Inverno: Cobertores e Aquecimento',
    imagem: 'https://diocesedesaojoaodelrei.com.br/wp-content/uploads/2019/05/content_0f1654f7-ba16-47b7-9db3-42e5cc5e720d.jpg',
    descricao: 'Campanha para arrecadar cobertores e agasalhos  para as famílias que enfrentam o frio.',
    categoria: 'Proteção Sazonal'
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
                <Link to={`/campanhas/detalhes/${campanha.id}`} className="link-donation">
                  <Button typeButton="secondary" >Ver mais</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </ContainerCampaigns>

    </Container>
  );
}