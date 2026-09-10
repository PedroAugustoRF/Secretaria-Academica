# Secretaria Acadêmica — Cadastro de Alunos

API em Node.js/Express + MySQL para cadastro e gestão de alunos, com front-end em HTML/CSS/JS puro.

## Estrutura

```
application/    App.js (servidor Express)
routes/         Rotas da API
controller/     Controllers (regras de request/response)
dao/            Acesso ao banco de dados
model/entities/ Entidades do domínio
database/       Conexão MySQL e schema.sql
view/           Front-end (index.html, script.js, styles.css)
```

## Pré-requisitos

- Node.js 18+
- MySQL rodando localmente

## Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Crie o banco de dados executando o script `database/schema.sql` no seu MySQL:
   ```bash
   mysql -u root -p < database/schema.sql
   ```

3. Copie o arquivo de variáveis de ambiente e preencha com suas credenciais do MySQL:
   ```bash
   cp .env.example .env
   ```

4. Suba o servidor:
   ```bash
   npm start
   ```

5. Acesse **http://localhost:3000** no navegador.

## Endpoints da API

| Método | Rota         | Descrição              |
|--------|--------------|-------------------------|
| GET    | /aluno       | Lista todos os alunos   |
| GET    | /aluno/:id   | Busca aluno por ID      |
| POST   | /aluno       | Cadastra novo aluno     |
| PUT    | /aluno/:id   | Atualiza aluno          |
| DELETE | /aluno/:id   | Remove aluno            |
