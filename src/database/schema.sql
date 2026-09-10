CREATE DATABASE IF NOT EXISTS express;

USE express;

CREATE TABLE IF NOT EXISTS alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    curso VARCHAR(150),
    sexo VARCHAR(20),
    idade INT,
    nacionalidade VARCHAR(100),
    periodo VARCHAR(20)
);
