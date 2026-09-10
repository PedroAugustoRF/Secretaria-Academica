import AlunoDAO from "../dao/AlunoDAO.js";
import Aluno from "../model/entities/Aluno.js";

const alunoDAO = new AlunoDAO();

export async function getAllAlunos(req, res) {
    try {
        const alunos = await alunoDAO.listarTodos();
        return res.json(alunos.map(a => a.toJSON()));
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export async function getAlunoById(req, res) {
    try {
        const { id } = req.params;
        const aluno = await alunoDAO.buscarPorId(id);
        
        if (!aluno) {
            return res.status(404).json({ message: "Aluno não encontrado" });
        }
        
        return res.json(aluno.toJSON());
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export async function createAluno(req, res) {
    try {
        const { nome, curso, sexo, idade, nacionalidade, periodo } = req.body;
        const novoAluno = new Aluno(null, nome, curso, sexo, idade, nacionalidade, periodo);
        
        const idGerado = await alunoDAO.inserir(novoAluno);
        return res.status(201).json({ id: idGerado, message: "Aluno criado com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export async function updateAluno(req, res) {
    try {
        const { id } = req.params;
        const { nome, curso, sexo, idade, nacionalidade, periodo } = req.body;
        
        const alunoAtualizado = new Aluno(id, nome, curso, sexo, idade, nacionalidade, periodo);
        const linhasAfetadas = await alunoDAO.atualizar(alunoAtualizado);
        
        if (linhasAfetadas === 0) {
            return res.status(404).json({ message: "Aluno não encontrado para atualizar" });
        }
        
        return res.json({ message: "Aluno atualizado com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export async function deleteAlunoById(req, res) {
    try {
        const { id } = req.params;
        const linhasAfetadas = await alunoDAO.deletar(id);
        
        if (linhasAfetadas === 0) {
            return res.status(404).json({ message: "Aluno não encontrado para deletar" });
        }
        
        return res.json({ message: "Aluno deletado com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}