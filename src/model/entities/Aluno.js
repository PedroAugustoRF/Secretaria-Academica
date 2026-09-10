export default class Aluno {
    #id;
    #nome;
    #curso;
    #sexo;
    #idade;
    #nacionalidade;
    #periodo;

    constructor(id, nome, curso, sexo, idade, nacionalidade, periodo) {
        this.#id = id;
        this.#nome = nome;
        this.#curso = curso;
        this.#sexo = sexo;
        this.#idade = idade;
        this.#nacionalidade = nacionalidade;
        this.#periodo = periodo; 
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get curso() {
        return this.#curso;
    }

    set curso(curso) {
        this.#curso = curso;
    }

    get sexo() {
        return this.#sexo;
    }

    set sexo(sexo) {
        this.#sexo = sexo;
    }

    get idade() {
        return this.#idade;
    }

    set idade(idade) {
        this.#idade = idade;
    }

    get nacionalidade() {
        return this.#nacionalidade;
    }

    set nacionalidade(nacionalidade) {
        this.#nacionalidade = nacionalidade;
    }

    get periodo() {
        return this.#periodo;
    }

    set periodo(periodo) {
        this.#periodo = periodo;
    }

    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            curso: this.#curso,
            sexo: this.#sexo,
            idade: this.#idade,
            nacionalidade: this.#nacionalidade,
            periodo: this.#periodo
        }
    }
}