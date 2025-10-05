### Estrutura de Páginas

#### 1. **Página Inicial**
- `/` ou `/home`
-  Visão geral (dashboard simples)
-  Acesso rápido aos módulos: Doações, Relatórios, Mensagens, Usuários

---

#### 2. **Módulo: Doações**

- `/doacoes`
  - Lista de todas as doações (GET `/doacao`)
- `/doacoes/nova`
  - Formulário para criar nova doação (POST `/doacao`)
- `/doacoes/:id/editar`
  - Formulário para editar doação (caso a API venha a suportar PUT futuramente)
- `/doacoes/:id`
  - Página de detalhes da doação (opcional)

---

#### 3. **Módulo: Relatórios**

- `/relatorios`
  - Formulário de filtros (tipo, datas, doador) para gerar relatório (POST `/relatorio`)
  - Exibe o relatório gerado
- `/relatorios/exportar`
  - Exportação do relatório em PDF (GET `/donation/reports/pdf/{...}`)

---

#### 4. **Módulo: Mensagens**

- `/mensagens`
  - Lista de todas as mensagens (GET `/mensagens`)
- `/mensagens/nova`
  - Formulário para criar nova mensagem (POST `/mensagens`)
- `/mensagens/:id`
  - Visualizar detalhes da mensagem (GET `/mensagens/:id`)
- `/mensagens/:id/editar`
  - Editar mensagem existente (PUT `/mensagens/:id`)

---

#### 5. **Módulo: Usuários**

- `/usuarios`
  - Lista de usuários (GET `/users`)
- `/usuarios/novo`
  - Formulário para criar novo usuário (POST `/users`)
- `/usuarios/:id`
  - Visualizar detalhes do usuário (GET `/users/:id`)
- `/usuarios/:id/editar`
  - Editar usuário (PUT `/users/:id`)

---