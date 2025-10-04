# Problema

O principal problema da ajuda humanitária em catástrofes no Brasil não é a falta de solidariedade, mas o caos da desorganização, que transforma boas intenções em desperdício e ineficiência.

Isso se manifesta em quatro pontos críticos:

1.  **Doações Inadequadas:** Sem informação centralizada, chegam toneladas de itens inúteis (gerando lixo), enquanto os suprimentos realmente essenciais faltam.
2.  **Colapso Logístico:** Os pontos de coleta ficam sobrecarregados, sem controle de estoque, e a ajuda certa não chega a quem precisa no tempo certo.
3.  **Desconexão Total:** Doadores, voluntários e vítimas não se comunicam. Recursos valiosos (como transporte e habilidades) são mal aproveitados.
4.  **Falta de Transparência:** A ausência de um sistema para rastrear as doações diminui a confiança do público e desestimula a ajuda em crises futuras.

Em resumo, a falta de uma plataforma unificada faz com que a generosidade do brasileiro se perca no caminho, criando um "segundo desastre" logístico e informativo.

# Solução

Dado este problema, nasce a necessidade de criar um meio que sirva como intermediário e facilitador entre os locais e ocorrências de catástrofes e as doações para estes ambientes afetados. Com isso, o grupo decidiu criar um site intitulado de **AjudaJá**, onde com ele será possível ter uma visão otimizada das ocorrências de catástrofes. Além disso, a plataforma servirá como ponto central de doações, onde os usuários podem escolher ONGs locais para realizar estas doações ou por outros meios também, como os Correios para todo o Brasil.

A plataforma **AjudaJá** atuará como um Sistema de Gerenciamento de Doações, projetado para facilitar o registro, controle e geração de relatórios, otimizando a gestão para as organizações que recebem os donativos e garantindo transparência para quem doa.

# Requisitos

Para atender aos objetivos do projeto, os seguintes requisitos foram definidos:

### Requisitos Funcionais (RF)

* **Gerenciamento de Usuários (CRUD):**
    * O sistema deve permitir o **Cadastro** de novos usuários (administradores de ONGs, voluntários).
    * O sistema deve permitir a **Leitura** (visualização) dos dados dos usuários cadastrados.
    * O sistema deve permitir a **Atualização** das informações dos usuários.
    * O sistema deve permitir a **Exclusão** de usuários.

* **Gerenciamento de Doações (CRUD):**
    * O sistema deve permitir o **Cadastro** de novas doações (financeiras e materiais), especificando tipo, quantidade e destino.
    * O sistema deve permitir a **Leitura** (visualização) de um histórico completo de doações com filtros (por data, tipo, ONG).
    * O sistema deve permitir a **Atualização** do status de uma doação (ex: "recebido", "a caminho", "entregue").
    * O sistema deve permitir a **Exclusão** de registros de doações.

* **Gerenciamento de Campanhas/Catástrofes:**
    * O sistema deve permitir que administradores cadastrem novas campanhas de arrecadação vinculadas a uma catástrofe específica.
    * O sistema deve listar as campanhas ativas na página inicial, informando as necessidades prioritárias de cada uma.

* **Geração de Relatórios:**
    * O sistema deve permitir a geração de relatórios de doações em formato `PDF`.
    * Os relatórios devem ser customizáveis, permitindo filtrar por período, tipo de doação ou campanha.

* **Múltiplas Telas:**
    * A aplicação deverá conter, no mínimo, 4 telas: Home (com listagem de campanhas), Cadastro de Doação, Listagem/Histórico de Doações e tela de Relatórios.

### Requisitos Não Funcionais (RNF)

* **Usabilidade:** A interface deve ser clara, intuitiva e responsiva, adaptando-se a diferentes tamanhos de tela (desktop e mobile).
* **Desempenho:** A aplicação deve ser rápida e as requisições à API devem ter um tempo de resposta baixo.
* **Tecnologia:** O front-end deve ser desenvolvido 100% em `React`.
* **Integração:** O sistema deve ser totalmente integrado a uma `API RESTful` para persistência de dados.
* **Identidade Visual:** A aplicação deve possuir um `FavIcon` personalizado para fácil identificação no navegador.

# Protótipo

Antes do desenvolvimento, será criada a prototipagem da interface do usuário (UI) e da experiência do usuário (UX) utilizando ferramentas como `Figma` ou `Adobe XD`. O protótipo incluirá:

* **Wireframes:** Esboços de baixa fidelidade para definir a estrutura e o fluxo de navegação entre as telas principais:
    * Tela de Login/Cadastro de Usuário.
    * Página Inicial (Dashboard) com as campanhas em destaque.
    * Tela de Listagem e Gerenciamento de Doações.
    * Formulário de Cadastro/Edição de Doação.
    * Página de Geração de Relatórios.
* **Mockups:** Design visual detalhado da interface, aplicando a identidade visual do **AjudeJá** (cores, tipografia, ícones) e criando uma representação fiel do produto final.
* **Protótipo:** Uma versão navegável do mockup que simula a interação do usuário com os componentes da aplicação, permitindo validar o fluxo e a usabilidade antes da implementação.

# Desenvolvimento

O desenvolvimento do front-end seguirá as melhores práticas do mercado, utilizando as seguintes tecnologias e metodologias:

* **Biblioteca Principal:** `React` para a construção de uma interface de usuário reativa e componentizada.
* **Gerenciamento de Rotas:** `React Router DOM` para criar a navegação entre as múltiplas telas da aplicação de forma dinâmica (SPA - Single Page Application).
* **Comunicação com o Back-end:** `Axios` para realizar requisições HTTP (`GET`, `POST`, `PUT`, `DELETE`) à API RESTful, gerenciando o fluxo de dados entre o cliente e o servidor.
* **Estilização:** `Styled-Components` ou `Material-UI` para a criação de componentes estilizados, garantindo uma interface moderna, consistente e responsiva.
* **Controle de Versão:** `Git` e `GitHub` para o gerenciamento do código-fonte, trabalho em equipe e versionamento do projeto.
* **Metodologia:** O projeto será desenvolvido seguindo um fluxo de trabalho baseado em componentes, onde cada parte da interface será isolada para facilitar a manutenção e reutilização de código. A integração com a API back-end será realizada de forma paralela ao desenvolvimento das telas.
* **Publicação (Deploy):** Após a conclusão, o projeto será publicado em uma plataforma de hospedagem para demonstração e acesso público.
