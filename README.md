# 🎓 Secretaria Acadêmica — Cadastro de Alunos

Sistema simples de cadastro e gestão de alunos, com API REST em **Node.js + Express** e banco de dados **MySQL**, além de um front-end em **HTML, CSS e JavaScript puro**.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Funcionalidades

- Cadastrar aluno (nome, curso, período, sexo, idade, nacionalidade)
- Listar todos os alunos
- Buscar aluno por nome ou curso
- Editar dados de um aluno
- Excluir aluno

## 🛠️ Tecnologias

**Back-end**
- Node.js
- Express
- MySQL (via `mysql2`)
- dotenv

**Front-end**
- HTML5
- CSS3
- JavaScript (Fetch API)

## 📁 Estrutura do projeto

```
├── application/
│   └── App.js              # ponto de entrada do servidor Express
├── routes/
│   └── AlunoRoutes.js       # definição das rotas
├── controller/
│   └── AlunoController.js   # regras de request/response
├── dao/
│   └── AlunoDAO.js          # acesso ao banco de dados
├── model/
│   └── entities/Aluno.js    # entidade Aluno
├── database/
│   ├── Connection.js        # conexão MySQL (pool)
│   └── schema.sql           # script de criação do banco/tabela
├── view/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── .env.example
└── package.json
```

## 🚀 Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) 18 ou superior
- [MySQL](https://www.mysql.com/) instalado e rodando

### Passo a passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o banco de dados e a tabela executando o script:
   ```bash
   mysql -u root -p < database/schema.sql
   ```

4. Copie o arquivo de variáveis de ambiente e preencha com suas credenciais:
   ```bash
   cp .env.example .env
   ```
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=express
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

6. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 📡 Endpoints da API

| Método | Rota          | Descrição                     |
|--------|---------------|--------------------------------|
| GET    | `/aluno`      | Lista todos os alunos          |
| GET    | `/aluno/:id`  | Busca um aluno pelo ID         |
| POST   | `/aluno`      | Cadastra um novo aluno         |
| PUT    | `/aluno/:id`  | Atualiza os dados de um aluno  |
| DELETE | `/aluno/:id`  | Remove um aluno                |

**Exemplo de corpo para POST/PUT:**
```json
{
  "nome": "Maria Silva",
  "curso": "Engenharia de Software",
  "sexo": "Feminino",
  "idade": 22,
  "nacionalidade": "Brasileira",
  "periodo": "4"
}
```

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

## 👤 Autor

Feito por [seu nome aqui].
