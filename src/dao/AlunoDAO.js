import Connection from "../database/Connection.js"
import Aluno from "../model/entities/Aluno.js";

export default class AlunoDAO {
    async inserir(aluno) {
        const sql = `
            INSERT INTO alunos (nome, curso, sexo, idade, nacionalidade, periodo) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const params = [
            aluno.nome,
            aluno.curso,
            aluno.sexo,
            aluno.idade,
            aluno.nacionalidade,
            aluno.periodo
        ];
        const [resultado] = await Connection.query(sql, params);
        return resultado.insertId;
    }

    async listarTodos() {
        const sql = `SELECT * FROM alunos`;
        const [rows] = await Connection.query(sql);

        return rows.map(row => new Aluno(
            row.id,
            row.nome,
            row.curso,
            row.sexo,
            row.idade,
            row.nacionalidade,
            row.periodo
        ));
    }

    async buscarPorId(id) {
        const sql = `SELECT * FROM alunos WHERE id = ?`;
        const [rows] = await Connection.query(sql, [id]);

        if (rows.length === 0) return null;

        const row = rows[0];
        return new Aluno(
            row.id,
            row.nome,
            row.curso,
            row.sexo,
            row.idade,
            row.nacionalidade,
            row.periodo
        );
    }

    async atualizar(aluno) {
        const sql = `
            UPDATE alunos 
            SET nome = ?, curso = ?, sexo = ?, idade = ?, nacionalidade = ?, periodo = ? 
            WHERE id = ?
        `;
        const params = [
            aluno.nome,
            aluno.curso,
            aluno.sexo,
            aluno.idade,
            aluno.nacionalidade,
            aluno.periodo,
            aluno.id
        ];

        const [resultado] = await Connection.query(sql, params);
        return resultado.affectedRows;
    }

    async deletar(id) {
        const sql = `DELETE FROM alunos WHERE id = ?`;
        const [resultado] = await Connection.query(sql, [id]);
        return resultado.affectedRows;
    }
}