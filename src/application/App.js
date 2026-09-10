import express from "express";
import cors from "cors";
import alunoRoute from "../routes/AlunoRoutes.js";

const app = express();
const porta = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static("view"));

app.use("/aluno", alunoRoute);

app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
});