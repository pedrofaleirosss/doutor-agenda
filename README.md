# 🩺 Doutor Agenda

Sistema completo de **gerenciamento de clínicas médicas**, desenvolvido com foco em produtividade, organização e experiência do usuário.

🔗 Deploy: https://doutor-agenda-tau.vercel.app/  
📦 Repositório: https://github.com/pedrofaleirosss/doutor-agenda

---

## 📌 Sobre o projeto

O Doutor Agenda é uma aplicação full stack desenvolvida em Next.js que permite gerenciar:

- 📅 Agendamentos
- 👨‍⚕️ Médicos
- 🧑‍🤝‍🧑 Pacientes
- 💰 Faturamento
- 📊 Métricas e dashboard
- 💳 Assinaturas (Stripe)

O projeto foi desenvolvido durante os cursos do **Full Stack Club**, com diversas melhorias implementadas além do conteúdo original — como **responsividade**, organização de layout e refinamento de UX/UI.

---

## ✨ Funcionalidades

### 🔐 Autenticação
- Login com e-mail/senha
- Login com Google
- Proteção de rotas
- Redirecionamento inteligente

---

### 📊 Dashboard
- Visão geral da clínica
- Métricas principais:
  - Faturamento
  - Agendamentos
  - Pacientes
  - Médicos
- Gráfico de agendamentos e faturamento
- Top médicos
- Top especialidades
- Agendamentos do dia
- Filtro por intervalo de datas

---

### 📅 Agendamentos
- Listagem em tabela
- Criação de novos agendamentos
- Relacionamento com médicos e pacientes

---

### 👨‍⚕️ Médicos
- Cadastro de médicos
- Edição de dados
- Definição de:
  - Dias de atendimento
  - Horários
  - Valor da consulta
- Visualização em cards responsivos

---

### 🧑‍🤝‍🧑 Pacientes
- Listagem de pacientes
- Cadastro e edição
- Informações básicas (nome, e-mail, telefone, etc.)

---

### 💳 Planos
- Integração com Stripe
- Simulação de assinatura
- Planos disponíveis:
  - Starter
  - Essential

---

## 🛠️ Tecnologias utilizadas

### Frontend
- Next.js 15
- React 19
- Tailwind CSS 4
- Radix UI
- Lucide Icons
- Recharts
- React Hook Form
- Zod

### Backend / Fullstack
- Next.js App Router
- Drizzle ORM
- PostgreSQL (Neon)
- Better Auth

### Outros
- Stripe
- React Query
- Day.js / Date-fns
- Nuqs (URL state)
- Sonner (toasts)

---

## 🗄️ Banco de dados

- PostgreSQL hospedado no **Neon**
- ORM: **Drizzle**
- Estrutura relacional com:
  - usuários
  - clínicas
  - médicos
  - pacientes
  - agendamentos

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/pedrofaleirosss/doutor-agenda.git
cd doutor-agenda
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto:

```
DATABASE_URL=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
AUTH_SECRET=
```

### 4. Rode o projeto
```bash
npm run dev
```

Acesse em:

```
http://localhost:3000
```

---

## 📱 Responsividade

O projeto foi adaptado para diferentes tamanhos de tela:

- 📱 Mobile
- 💻 Desktop
- 🖥️ Telas grandes

Inclui:

- Grids responsivos
- Tabelas com scroll horizontal
- Layout flexível

---

## 📸 Preview das telas

Principais telas do sistema:

- 🔐 Login / Cadastro

<img width="1920" height="1038" alt="image" src="https://github.com/user-attachments/assets/fc38f833-d6b9-40fe-8b8a-81c184cd2b34" />
<br>
<img width="1920" height="1037" alt="image" src="https://github.com/user-attachments/assets/f116dcb5-716f-4fc5-8188-42fe7434b86b" />

---

- 📊 Dashboard

<img width="1920" height="1037" alt="image" src="https://github.com/user-attachments/assets/8af0fdaf-ffdb-44ff-b5dd-acb097861e5e" />
<br>
<img width="1920" height="1037" alt="image" src="https://github.com/user-attachments/assets/6cc26c11-84d8-4781-848b-7ae41fa67b8b" />

---

- 📅 Agendamentos

<img width="1920" height="1037" alt="image" src="https://github.com/user-attachments/assets/f6d608d5-06cc-4603-b9c8-354fa9062c51" />
<br>
<img width="1920" height="1038" alt="image" src="https://github.com/user-attachments/assets/e6ae3bf4-2977-47fc-aee3-1fe8c6ca35d2" />

---

- 👨‍⚕️ Médicos

<img width="1920" height="1040" alt="image" src="https://github.com/user-attachments/assets/05d429b8-1e02-4022-bb44-e6161f81a0cd" />
<br>
<img width="1920" height="1038" alt="image" src="https://github.com/user-attachments/assets/5d0729f7-3c12-4743-9425-55d315a9ecf5" />

---

- 🧑‍🤝‍🧑 Pacientes

<img width="1920" height="1039" alt="image" src="https://github.com/user-attachments/assets/c2e0137b-94e2-4461-a26e-c61a6fbb84ba" />
<br>
<img width="1912" height="1036" alt="image" src="https://github.com/user-attachments/assets/9a829bec-e2a0-45bf-98dd-73febfb346d2" />

---

- 💳 Planos

<img width="1920" height="1039" alt="image" src="https://github.com/user-attachments/assets/dc467b51-ca7c-4f0f-8e38-f59ea054f120" />
<br>
<img width="1920" height="1037" alt="image" src="https://github.com/user-attachments/assets/30081d8f-91e9-4dd9-923e-17df59287259" />

---

## 🔖 Padrão de Commits
Ao longo de todo o projeto, todos os commits seguem o padrão Conventional Commits e foram escritos em inglês.

Essa padronização traz benefícios como:

- ✅ Histórico de commits limpo e organizado
- ✅ Melhor entendimento das mudanças realizadas
- ✅ Facilidade para manutenção e escalabilidade do projeto
- ✅ Clareza na identificação do tipo de mudança (feat, fix, refactor, test, chore, etc.)

---

## 👨‍💻 Autor

Feito por Pedro Faleiros

- 💼 LinkedIn: https://www.linkedin.com/in/pedro-faleiros123/
- 💻 GitHub: https://github.com/pedrofaleirosss
