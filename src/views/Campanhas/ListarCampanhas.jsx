

import { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import { Container, ContainerCampaigns } from "./ListarCampanhas.styles";
import ProgressBarComponent from "../../components/ProgressBar/ProgressBar";
import CardComponent from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';


const mockCampanhas = [
    { id: 1, titulo: 'Ajuda às Vítimas da Chuva', imagem: 'https://pbs.twimg.com/media/G3bJwK1WIAA2Mq1?format=jpg&name=900x900', arrecadado: 5000, meta: 10000 },
    { id: 2, titulo: 'Mochilas para Crianças', imagem: 'https://pbs.twimg.com/media/G3cBIAdW8AAUwMg?format=jpg&name=small', arrecadado: 1500, meta: 2000 },
    { id: 3, titulo: 'Refeições Comunitárias', imagem: 'https://pbs.twimg.com/media/G3ZRzwbWIAQ6i3c?format=jpg&name=small', arrecadado: 800, meta: 5000 },
];

export default function ListarCampanhas() {
    const [campanhas, setCampanhas] = useState([]);

    useEffect(() => {

        setCampanhas(mockCampanhas); 
    }, []);

    return (
        <Container>
            <div className="title-box"> 
                <h1 className="title">Campanhas</h1>
                <p className="description-title"> Aqui você encontra campanhas ativas que precisam da sua ajuda. Cada contribuição faz diferença e ajuda a levar esperança a quem mais precisa. Escolha uma causa e faça parte dessa corrente de solidariedade!</p>
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
                                <ProgressBarComponent 
                                    arrecadado={campanha.arrecadado} 
                                    meta={campanha.meta}
                                />
                               <Button typeButton={'secondary'} text={"Quero ajudar"}> <Link to={`/doar/${campanha.id}`} className="link-donation" >
                                    Quero Ajudar
                                </Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </ContainerCampaigns>
            </CardComponent>
        </Container>
    );
}