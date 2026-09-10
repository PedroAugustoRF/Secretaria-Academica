# view

Frontend do cadastro de alunos. Consome a API Express em `http://localhost:3000/aluno`.

Arquivos:
- `index.html` — página com formulário e listagem
- `styles.css` — estilos
- `script.js` — chamadas à API (GET, POST, PUT, DELETE)

## Como usar

1. Suba o backend (`npm start`).
2. Abra `view/index.html` no navegador, ou sirva a pasta pelo Express adicionando
   no `application/App.js`:

   ```js
   app.use(express.static("view"));
   ```

   (opcional — evita bloqueio de CORS ao abrir o arquivo direto).

Se abrir o HTML por `file://` e o navegador bloquear as requisições, instale o CORS:

```bash
npm i cors
```

```js
import cors from "cors";
app.use(cors());
```
