# Sistema de Gerenciamento de Doações
[Projeto Final de Soluções Mobile](/Requirements.md)

[Motivação e Conclusões](/Proposta.md)

Este é o projeto final da disciplina de FrontEnd do curso de Engenharia de Software do Centro Universitário SATC, ministrada pelo professor Thyerri Mezzari. O objetivo é desenvolver uma aplicação web completa em React que resolva um problema real, aplicando os conceitos aprendidos ao longo do semestre.

Nossa equipe escolheu desenvolver um **Sistema de Gerenciamento de Doações**, uma plataforma projetada para facilitar o registro, controle e geração de relatórios de doações, otimizando a gestão para ONGs, instituições de caridade ou qualquer organização que dependa de doações.

## Sobre o Projeto

A aplicação visa resolver a dificuldade no controle de doações recebidas, oferecendo uma interface clara e intuitiva para gerenciar doações de materiais e financeiras. Com este sistema, os usuários podem cadastrar novas doações, visualizar um histórico completo, atualizar informações e excluir registros, além de gerar relatórios detalhados para análise e prestação de contas.

## Funcionalidades

O projeto atende a todos os requisitos obrigatórios e explora funcionalidades opcionais para enriquecer a experiência do usuário e a complexidade técnica da aplicação.

### Requisitos Obrigatórios Implementados

  * **Múltiplas Telas:** A aplicação conta com no mínimo 4 telas distintas para uma navegação fluida e organizada (Ex: Home, Cadastro de Doação, Listagem de Doações, Relatórios).
  * **FavIcon Personalizado:** Um ícone exclusivo foi criado e implementado para identificar a aplicação no navegador.
  * **Operações CRUD:** Foram implementadas operações de Cadastro, Leitura, Atualização e Exclusão para as seguintes entidades:
      * Gerenciamento de **Doações**.
      * Gerenciamento de **Usuários**.
      * Gerenciamento de **Mensagens**.
  * **100% em React:** Todo o front-end foi desenvolvido utilizando a biblioteca React, seguindo as melhores práticas.

### Requisitos Opcionais Implementados

  * **Integração com Back-end:** O front-end está totalmente integrado com a API RESTful desenvolvida na disciplina de Back-end, permitindo a persistência e o gerenciamento dos dados.
  * **Geração de Arquivos:** Implementada a funcionalidade para gerar e exportar relatórios de doações em formato **PDF**, consumindo o endpoint específico do back-end.
  * **(Opcional) Publicação Online:** O projeto foi publicado online para fácil acesso e demonstração. *https://ajuda.acoder.com.br*.

## Tecnologias Utilizadas

  * **React:** Biblioteca principal para a construção da interface de usuário.
  * **Axios:** Para realizar as requisições HTTP e consumir a API back-end.
  * **React Router DOM:** Para gerenciamento das rotas da aplicação.
  * **Material-UI:** Para estilização dos componentes.
  * **Git:** Para controle de versão e hospedagem do código-fonte.

## Como Executar o Projeto

Siga os passos abaixo para clonar e executar o projeto em seu ambiente local.

### Pré-requisitos

  * [Node.js](https://nodejs.org/en/) (versão 22)

  * Uma instância do [back-end do projeto](https://github.com/hqnicolas/AjudaJaServer) rodando *https://n3.acoder.com.br/*.

### Passos

1.  **Clone o repositório do front-end:**

    ```bash
    git clone https://github.com/hqnicolas/AjudaJaFront.git
    ```

2.  **Acesse o diretório do projeto:**

    ```bash
    cd AjudaJaFront
    ```

3.  **Libere o serviço para seu endereço:**

    ```bash
    //vite.config.js
    allowedHosts: ['ajuda.acoder.com.br'],
    ```
    

4.  **Instale as dependências:**

    ```bash
    docker compose build --no-cache
    ```

5.  **Inicie a aplicação:**

    ```bash
    docker compose up -d
    ```

A aplicação será aberta automaticamente em seu navegador no endereço `http://localhost:8080`.

## Integração com a API (Back-end)

O front-end consome a API RESTful documentada no manual do back-end. A comunicação é feita através dos seguintes endpoints principais:

  * **Doações:**

      * `GET /donation`: Lista todas as doações.
      * `POST /donation`: Cadastra uma nova doação.
      * `PUT /donation/{id}`: Atualiza uma doação existente.
      * `DELETE /donation/{id}`: Remove uma doação.

  * **Relatórios:**

      * `GET /donation/reports/pdf/{startDate}/{endDate}/{donationType}/{donor}`: Exporta um relatório em PDF.

  * **Usuários:**

      * `GET /users`: Lista todos os usuários.
      * `POST /users`: Cria um novo usuário.
      * `PUT /users/{id}`: Atualiza um usuário.
      * `DELETE /users/{id}`: Remove um usuário.

  * **Mensagens:**

      * `GET /messages`: Lista todas as mensagens.
      * `POST /messages`: Cria uma nova mensagem.
