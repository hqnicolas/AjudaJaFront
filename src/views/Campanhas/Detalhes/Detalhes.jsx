import { Container, NewDonationContainer } from "./Detalhes.styles";
import CardComponent from "../../../components/Card/Card";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/Button/Button";

export default function Detalhes() {
  const { id } = useParams();

  const mockDetalhesCampanhas = [
    {
      id: 1,
      titulo: "Ajuda às Vítimas da Chuva",
      imagem: "https://assets.brasildefato.com.br/2024/09/image_processing20210520-1578-1kburbm-750x449.jpeg",
      descricao: `
      As fortes chuvas que atingiram diversas regiões do país deixaram centenas de famílias desabrigadas. 
      Muitas perderam tudo: móveis, roupas e alimentos. 
      Essa campanha busca arrecadar donativos essenciais como roupas, cobertores, alimentos não perecíveis e kits de higiene. 
      Cada contribuição é encaminhada diretamente para abrigos comunitários e centros de apoio emergencial. 
      Sua ajuda é fundamental para devolver a dignidade e a esperança a quem foi afetado.`,
    },
    {
      id: 2,
      titulo: "Mochilas para Crianças",
      imagem: "https://paverama.rs.gov.br/uploads/noticia/20489/maior_Entrega_dos_uniformes_III.jpg",
      descricao: `
      O início do ano letivo é um momento importante para qualquer criança, mas muitas delas não têm acesso 
      a materiais escolares adequados. A campanha "Mochilas para Crianças" busca arrecadar mochilas, 
      cadernos, lápis, canetas e outros itens básicos para estudantes em situação de vulnerabilidade. 
      Com sua doação, você ajuda a garantir que essas crianças tenham um recomeço digno e motivador na escola.`,
    },
    {
      id: 3,
      titulo: "Refeições Comunitárias",
      imagem: "https://www.ba.gov.br/comunicacao/sites/site-comunicacao/files/migracao_2024/arquivos/wp-content/uploads/2024/07/Fotos-Thuane-MariaGOVBA-2-1.jpg",
      descricao: `
      Todos os dias, milhares de pessoas dormem com fome. 
      O projeto "Refeições Comunitárias" promove a distribuição de refeições nutritivas e balanceadas 
      para pessoas em situação de rua e famílias carentes. 
      Além da comida, oferecemos acolhimento, escuta e encaminhamento social. 
      Sua contribuição ajuda a manter as cozinhas solidárias ativas e a alimentar quem mais precisa.`,
    },
    {
      id: 4,
      titulo: "Kit de Recomeço: Utensílios Domésticos",
      imagem: "https://www.rotulosonline.com.br/wp-content/uploads/2018/02/utensilios-de-cozinha1.png",
      descricao: `
      Muitas famílias que tiveram suas casas reconstruídas após desastres naturais ainda enfrentam 
      dificuldades para recomeçar, pois não possuem itens básicos para o lar. 
      Essa campanha arrecada utensílios domésticos como panelas, pratos, fogões, geladeiras e colchões. 
      Cada doação é entregue diretamente às famílias beneficiadas, ajudando-as a retomar a rotina 
      com conforto e dignidade.`,
    },
    {
      id: 5,
      titulo: "Abrigos Temporários e Refúgio Animal",
      imagem: "https://www.rbsdirect.com.br/filestore/2/6/1/1/7/9/4_51b41cb28154c44/4971162_1b540dc394a407e.jpg?w=700",
      descricao: `
      Após enchentes e desastres, muitas pessoas e animais ficam sem ter onde se abrigar. 
      Essa campanha arrecada fundos para a criação e manutenção de abrigos temporários seguros, 
      com espaços adequados para famílias e também para animais resgatados. 
      Com a sua doação, podemos oferecer não apenas abrigo, mas também segurança e acolhimento 
      a quem mais precisa de um lar provisório.`,
    },
    {
      id: 6,
      titulo: "Kit Inverno: Cobertores e Aquecimento",
      imagem: "https://diocesedesaojoaodelrei.com.br/wp-content/uploads/2019/05/content_0f1654f7-ba16-47b7-9db3-42e5cc5e720d.jpg",
      descricao: `
      O frio intenso é especialmente cruel para quem vive em situação de rua. 
      A campanha "Kit Inverno" arrecada cobertores, agasalhos, meias e luvas para distribuição em comunidades carentes. 
      Além disso, os voluntários organizam mutirões para oferecer sopas e bebidas quentes. 
      Sua contribuição ajuda a aquecer corpos e corações durante os meses mais frios do ano.`,
    },
  ];

  const campanha = mockDetalhesCampanhas.find(c => c.id === Number(id));

  if (!campanha) return <p>Campanha não encontrada.</p>;

  return (
    <Container>
      <CardComponent>
        <NewDonationContainer>
          <h2>{campanha.titulo}</h2>
          <div className="content-donation">
            <div className="image">
              <img src={campanha.imagem} alt={campanha.titulo} />
            </div>
            <p>{campanha.descricao}</p>
          </div>

        </NewDonationContainer>
      </CardComponent>
    </Container>
  );
}